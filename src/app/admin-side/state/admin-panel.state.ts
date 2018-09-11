import {Action, State, StateContext} from '@ngxs/store';
import {PlainBookModel} from '../../models/plain-book.model';
import {PlainCollectionModel} from '../../models/plain-collection.model';
import {BookModel} from '../../models/book.model';
import {CollectionModel} from '../../models/collection.model';
import {ClearBookPageState, DeleteBook, GetAllPlainBooks, SaveNewBook, SelectBook, UpdateBook} from '../action/book.action';
import {ClearCollectionPageState, GetAllPlainCollections, SelectCollection, UpdateCollection} from '../action/collection.action';
import {BookPanelPageService} from '../book-panel-page/book-panel-page.service';
import {tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

export interface AdminPanelStateModel {
  plainBooks: PlainBookModel[];
  plainCollections: PlainCollectionModel[];
  selectedEditedBook: BookModel;
  selectedEditedCollection: CollectionModel;
}

@State<AdminPanelStateModel>({
  name: 'adminPanelPage',
  defaults: {
    plainBooks: [],
    plainCollections: [],
    selectedEditedBook: null,
    selectedEditedCollection: null,
  },
})
export class AdminPanelState {

  constructor(private bookPanelPageService: BookPanelPageService) {
  }

  @Action(ClearBookPageState)
  clearBookPageState({setState}: StateContext<AdminPanelStateModel>): void {
    setState(null);
  }

  @Action(GetAllPlainBooks)
  getAllPlainBooks({patchState}: StateContext<AdminPanelStateModel>): void {
    this.bookPanelPageService.getAllBooks().subscribe((books: { plainBooks: PlainBookModel[] }) => {
      patchState({plainBooks: books.plainBooks});
    });
  }

  @Action(SelectBook)
  selectBook({patchState}: StateContext<AdminPanelStateModel>, {payload}: SelectBook): Observable<BookModel> {
    return this.bookPanelPageService.getBookByGuid(payload.guid).pipe(tap((selectedBook) => {
      patchState({selectedEditedBook: selectedBook});
    }));
  }

  @Action(UpdateBook)
  updateBook({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: SelectBook): void {
    let plainBooks: PlainBookModel[] = getState().plainBooks;
    this.bookPanelPageService.updateBook(payload).subscribe((books: {plainBooks: PlainBookModel[]}) => {
      patchState({plainBooks: books.plainBooks, selectedEditedBook: null})
    });
  }

  @Action(SaveNewBook)
  saveNewBook({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: SaveNewBook): void {
    this.bookPanelPageService.saveNewBook(payload).subscribe((result: {plainBooks: PlainBookModel[]}) => {
      patchState({plainBooks: result.plainBooks})
    });
  }

  @Action(DeleteBook)
  deleteBook({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: DeleteBook): void {
    this.bookPanelPageService.deleteBook(payload).subscribe((books: {plainBooks: PlainBookModel[]}) => {
      patchState({plainBooks: books.plainBooks, selectedEditedBook: null});
    });
  }

  @Action(ClearCollectionPageState)
  clearCollectionPageState({setState}: StateContext<AdminPanelStateModel>): void {
    setState(null);
  }

  @Action(GetAllPlainCollections)
  getAllPlainCollections({patchState}: StateContext<AdminPanelStateModel>): void {
    // TODO write get request for downloading all Collections from DB
  }

  @Action(SelectCollection)
  selectCollection({patchState}: StateContext<AdminPanelStateModel>, {payload}: SelectCollection): void {
    patchState({selectedEditedCollection: payload});
  }

  @Action(UpdateCollection)
  updateCollection({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: UpdateCollection): void {
    let plainCollections: PlainCollectionModel[] = getState().plainCollections;
    plainCollections.forEach((plainCollection: PlainCollectionModel) => {
      if (plainCollection.guid === payload.guid) {
        plainCollection.title = payload.title;
        // TODO write a post request for save updated Collection to DB
      }
    });
    patchState({plainCollections: plainCollections});
  }
}
