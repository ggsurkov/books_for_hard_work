import { Component, OnInit } from '@angular/core';
import {CollectionModel, createEmptyCollections} from "../../../models/collection.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  collections: CollectionModel[] = createEmptyCollections();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCollection(collectionId: Number) {
    this.router.navigate([`book-collection/${collectionId}`])
  }
}
