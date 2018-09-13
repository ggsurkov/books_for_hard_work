import { Component, OnInit } from '@angular/core';
import {CollectionModel, createExampleCollections} from "../../models/collection.model";
import {Router} from "@angular/router";
import {transliterate} from "../../../core/helpers/transliterate";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  collections: CollectionModel[] = createExampleCollections();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCollection(collectionTitle: string) {
    let transliterateCollectionTitle: string = transliterate(collectionTitle);
    this.router.navigate([`book-collection/${transliterateCollectionTitle}`]);
  }
}
