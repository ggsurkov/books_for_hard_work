import {Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {Select, Store} from "@ngxs/store";
import {GetAllPlainBooks, SaveNewBook, SelectBook, UpdateBook} from "../action/book.action";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {BookPanelPageService} from "./book-panel-page.service";

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
  dataSource: any = [
    {guid: "g-1", title: "Моя жизнь. Мои достижения1", author: "Генри Форд"},
    {guid: "g-2", title: "Моя жизнь. Мои достижения2", author: "Генри Форд"},
    {guid: "g-3", title: "Моя жизнь. Мои достижения3", author: "Генри Форд"},
    {guid: "g-4", title: "Моя жизнь. Мои достижения4", author: "Генри Форд"},
    {guid: "g-5", title: "Моя жизнь. Мои достижения5", author: "Генри Форд"},
    {guid: "g-6", title: "Моя жизнь. Мои достижения6", author: "Генри Форд"},
    {guid: "g-7", title: "Моя жизнь. Мои достижения7", author: "Генри Форд"},
    {guid: "g-8", title: "Моя жизнь. Мои достижения8", author: "Генри Форд"}
  ];

  constructor(private store: Store, private bookPanelPageService: BookPanelPageService) {

  }
  ngOnInit() {
    this.store.dispatch(new GetAllPlainBooks);
  }

  selectBookForEdit(book: BookModel): void {
    this.store.dispatch(new SelectBook(book));
  }

  updateBook(book: BookModel) {
    this.store.dispatch(new UpdateBook(book));
  }

  saveNewBook(book: BookModel) {
    this.store.dispatch(new SaveNewBook(book));
  }
}
