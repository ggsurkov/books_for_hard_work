import {Component, Input, OnInit} from '@angular/core';
import {CollectionModel} from "../../../models/collection.model";
import {PlainCollectionModel} from "../../../models/plain-collection.model";

@Component({
  selector: 'app-update-collection-form',
  templateUrl: './update-collection-form.component.html',
  styleUrls: ['./update-collection-form.component.css']
})
export class UpdateCollectionFormComponent implements OnInit {
  @Input() selectedCollection: PlainCollectionModel;
  editedCollection: CollectionModel;

  constructor() { }

  ngOnInit() {
  }
  updateCollection () {

  }

  deleteCollection() {

  }
}
