import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs/index";
import {PlainBookModel} from "../../models/plain-book.model";
import {PlainCollectionModel} from "../../models/plain-collection.model";
import {BookModel} from "../../models/book.model";
import {CollectionModel} from "../../models/collection.model";
import {SelectBook} from "../action/admin-panel.action";

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {
  @Select(state => state.adminPanelPage.plainBooks)
  plainBooks$: Observable<PlainBookModel[]>;

  @Select(state => state.adminPanelPage.plainCollections)
  plainCollections$: Observable<PlainCollectionModel[]>;

  @Select(state => state.adminPanelPage.selectedEditedBook)
  selectedEditedBook$: Observable<BookModel>;

  @Select(state => state.adminPanelPage.selectedEditedCollection)
  selectedEditedCollection$: Observable<CollectionModel>;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {

  }
  openBookPanelPage() {
    this.router.navigate([`admin-panel/book-panel`])
  }
  openCollectionPanelPage() {
    this.router.navigate([`admin-panel/collection-panel`])
  }

  selectBook(book: BookModel) {
    this.store.dispatch(new SelectBook(book));
  }

}
