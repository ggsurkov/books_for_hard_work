import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {CollectionModel} from "../../../models/collection.model";
import {PlainCollectionModel} from "../../../models/plain-collection.model";

@Component({
  selector: 'app-update-collection-form',
  templateUrl: './update-collection-form.component.html',
  styleUrls: ['./update-collection-form.component.css']
})
export class UpdateCollectionFormComponent implements OnDestroy {
  @Input() selectedEditedCollection: CollectionModel;
  @Output() updateCollection: EventEmitter<CollectionModel> = new EventEmitter<CollectionModel>();

  constructor() { }


  ngOnDestroy() {

  }

  updateSelectedCollection () {
    this.updateCollection.emit(this.selectedEditedCollection)
  }

  deleteCollection() {

  }
}
