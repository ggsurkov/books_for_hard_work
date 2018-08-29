import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CollectionModel} from "../../models/collection.model";
import {SelectCollection, UpdateCollection} from "../action/collection.action";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-collection-panel-page',
  templateUrl: './collection-panel-page.component.html',
  styleUrls: ['./collection-panel-page.component.css']
})
export class CollectionPanelPageComponent {
  @Select(state => state.adminPanelPage.selectedEditedCollection)
  selectedEditedCollection$: Observable<CollectionModel>;

  dataSource: any = [
    {guid: "g-1", title: "Тайм Менеджмент", booksCount: 12},
    {guid: "g-2", title: "Лидерство в бизнесе", booksCount: 8},
  ];
  constructor(private store: Store) { }


  selectCollectionForEdit(collection: CollectionModel): void {
    this.store.dispatch(new SelectCollection(collection))
  }

  updateCollection(collection: CollectionModel) {
    this.store.dispatch(new UpdateCollection(collection))
  }
}
