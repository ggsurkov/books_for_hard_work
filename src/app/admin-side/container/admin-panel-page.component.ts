import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs/index";
import {PlainBookModel} from "../../models/plain-book.model";
import {PlainCollectionModel} from "../../models/plain-collection.model";
import {CollectionModel} from "../../models/collection.model";

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

  @Select(state => state.adminPanelPage.selectedEditedCollection)
  selectedEditedCollection$: Observable<CollectionModel>;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  openBookPanelPage() {
    this.router.navigate([`admin-panel/book-panel`])
  }
  openCollectionPanelPage() {
    this.router.navigate([`admin-panel/collection-panel`])
  }

}
