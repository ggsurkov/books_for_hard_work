import {Component, OnInit, ViewChild} from '@angular/core';
import {CollectionModel} from '../../models/collection.model';
import {DeleteCollection, GetAllPlainCollections, SaveNewCollection, SelectCollection, UpdateCollection} from '../action/collection.action';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs/index';
import {PlainCollectionModel} from '../../models/plain-collection.model';
import {MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-collection-panel-page',
  templateUrl: './collection-panel-page.component.html',
  styleUrls: ['./collection-panel-page.component.css']
})
export class CollectionPanelPageComponent implements OnInit {
  @Select(state => state.adminPanelPage.selectedEditedCollection)
  selectedEditedCollection$: Observable<CollectionModel>;
  @Select(state => state.adminPanelPage.plainCollections)
  plainCollections$: Observable<PlainCollectionModel[]>;
  @ViewChild('matTabGroup') matTabGroup: MatTabGroup;

  public selectedCollectionGuid: String = '';
  public firstTabNewCollection: number = 0;
  public secondTabEditCollection: number = 1;


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllPlainCollections());
  }

  selectCollectionForEdit(guid: string): void {
    this.store.dispatch(new SelectCollection(guid));
    this.matTabGroup.selectedIndex = this.secondTabEditCollection;
  }

  updateCollection(collection: CollectionModel): void {
    this.store.dispatch(new UpdateCollection(collection));
    this.matTabGroup.selectedIndex = this.firstTabNewCollection;
  }

  saveNewCollection(collection: CollectionModel): void {
    this.store.dispatch(new SaveNewCollection(collection));
  }

  deleteCollection(guid: string): void {
    this.store.dispatch(new DeleteCollection(guid));
    this.matTabGroup.selectedIndex = this.firstTabNewCollection;
  }
}
