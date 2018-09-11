import {Component, EventEmitter, OnInit, Output, OnDestroy, ViewChild} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {Select, Store} from "@ngxs/store";
import {DeleteBook, GetAllPlainBooks, SaveNewBook, SelectBook, UpdateBook} from '../action/book.action';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {BookPanelPageService} from "./book-panel-page.service";
import {MatTab, MatTabGroup} from "@angular/material";
import {store} from "@angular/core/src/render3/instructions";
import {AdminPanelState} from "../state/admin-panel.state";
import {PlainBookModel} from "../../models/plain-book.model";

@Component({
  selector: 'app-book-panel-page',
  templateUrl: './book-panel-page.component.html',
  styleUrls: ['./book-panel-page.component.css']
})
export class BookPanelPageComponent implements OnInit {
  @Select(state => state.adminPanelPage.selectedEditedBook)
  selectedEditedBook$: Observable<BookModel>;
  @Select(state => state.adminPanelPage.plainBooks)
  plainBooks$: Observable<BookModel>;

  selectedBookGuid: string = '';
  firstTabNewBook: number = 0;
  secondTabEditBook: number = 1;

  @ViewChild('matTabGroup') matTabGroup: MatTabGroup;

  constructor(private store: Store, private bookPanelPageService: BookPanelPageService) {

  }
  ngOnInit() {
    this.store.dispatch(new GetAllPlainBooks);
  }

  selectBookForEdit(book: BookModel): void {
    this.store.dispatch(new SelectBook(book)).subscribe(() => {
      this.selectedBookGuid = this.store.selectSnapshot((state => state.adminPanelPage.selectedEditedBook.guid));
    });
    this.matTabGroup.selectedIndex = this.secondTabEditBook;

  }

  updateBook(book: BookModel) {
    this.store.dispatch(new UpdateBook(book));
    this.matTabGroup.selectedIndex = this.firstTabNewBook;
  }

  saveNewBook(book: BookModel) {
    this.store.dispatch(new SaveNewBook(book));
  }
  deleteBook(guid: string) {
    this.store.dispatch(new DeleteBook(guid));
    this.matTabGroup.selectedIndex = this.firstTabNewBook;
  }
}
