import {Action, State, StateContext} from "@ngxs/store";
import {PlainBookModel} from "../../models/plain-book.model";
import {PlainCollectionModel} from "../../models/plain-collection.model";
import {BookModel} from "../../models/book.model";
import {CollectionModel} from "../../models/collection.model";
import {ClearBookPageState, GetAllPlainBooks, SaveNewBook, SelectBook, UpdateBook} from "../action/book.action";
import {
  ClearCollectionPageState, GetAllPlainCollections, SelectCollection,
  UpdateCollection
} from "../action/collection.action";
import {BookPanelPageService} from "../book-panel-page/book-panel-page.service";
import {tap} from "rxjs/internal/operators";

export interface AdminPanelStateModel {
  plainBooks: {plainBooks: PlainBookModel[]};
  plainCollections: PlainCollectionModel[];
  selectedEditedBook: BookModel;
  selectedEditedCollection: CollectionModel;
}

@State<AdminPanelStateModel>({
  name: 'adminPanelPage',
  defaults: {
    plainBooks: {plainBooks: []},
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
    setState(null)
  }

  @Action(GetAllPlainBooks)
  getAllPlainBooks({patchState}: StateContext<AdminPanelStateModel>): void {
    this.bookPanelPageService.getAllBooks().subscribe((books: BookModel[]) => {
      patchState({plainBooks: {plainBooks: books}})
    })
  }

  @Action(SelectBook)
  selectBook({patchState}: StateContext<AdminPanelStateModel>, {payload}: SelectBook): void {
    patchState({selectedEditedBook: payload})
  }

  @Action(UpdateBook)
  updateBook({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: SelectBook): void {
    let plainBooks: PlainBookModel[] = getState().plainBooks.plainBooks;

    plainBooks.forEach((plainBook: PlainBookModel) => {
      if(plainBook.guid === payload.guid) {
        plainBook.title = payload.title;
        plainBook.author = payload.author;
        // TODO write a post request for save updated book to DB
      }
    });
    patchState({plainBooks: {plainBooks: plainBooks}})

  }
  @Action(SaveNewBook)
  saveNewBook({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: SaveNewBook): void {
    const adminPanelStateModel: AdminPanelStateModel = getState();
    // this.bookPanelPageService.saveNewBook(payload).subscribe(() => {
    //   console.log('Post request add')
    // });
    this.bookPanelPageService.saveNewBook(payload).pipe(tap((result: {message, guid, plainBook}) => {
      let newPlainBook: PlainBookModel = result.plainBook;
      adminPanelStateModel.plainBooks.plainBooks.push(newPlainBook);
      patchState({plainBooks: adminPanelStateModel.plainBooks});
    }));
  }

  @Action(ClearCollectionPageState)
  clearCollectionPageState({setState}: StateContext<AdminPanelStateModel>): void {
    setState(null)
  }

  @Action(GetAllPlainCollections)
  getAllPlainCollections({patchState}: StateContext<AdminPanelStateModel>): void {
    // TODO write get request for downloading all Collections from DB
  }

  @Action(SelectCollection)
  selectCollection({patchState}: StateContext<AdminPanelStateModel>, {payload}: SelectCollection): void {
    patchState({selectedEditedCollection: payload})
  }

  @Action(UpdateCollection)
  updateCollection({patchState, getState}: StateContext<AdminPanelStateModel>, {payload}: UpdateCollection): void {
    let plainCollections: PlainCollectionModel[] = getState().plainCollections;
    plainCollections.forEach((plainCollection: PlainCollectionModel) => {
      if(plainCollection.guid === payload.guid) {
        plainCollection.title = payload.title;
        // TODO write a post request for save updated Collection to DB
      }
    });
    patchState({plainCollections: plainCollections})
  }
}
