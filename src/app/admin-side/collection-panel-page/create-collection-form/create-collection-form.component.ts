import { Component, OnInit } from '@angular/core';
import {CollectionModel, createEmptyCollection} from "../../../models/collection.model";

@Component({
  selector: 'app-create-collection-form',
  templateUrl: './create-collection-form.component.html',
  styleUrls: ['./create-collection-form.component.css']
})
export class CreateCollectionFormComponent implements OnInit {
  newCollection: CollectionModel = createEmptyCollection();
  constructor() { }

  ngOnInit() {
  }
  saveCollection(collection: CollectionModel) {

  }
}
