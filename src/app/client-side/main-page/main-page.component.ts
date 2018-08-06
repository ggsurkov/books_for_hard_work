import { Component, OnInit } from '@angular/core';
import {CollectionModel, createEmptyCollections} from "../../../models/collection.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  collections: CollectionModel[] = createEmptyCollections();
  constructor() { }

  ngOnInit() {
  }

}
