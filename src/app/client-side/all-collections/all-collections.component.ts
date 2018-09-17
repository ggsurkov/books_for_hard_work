import { Component, OnInit } from '@angular/core';
import {ClientSideService} from "../client-side.service";
import {CollectionModel} from "../../models/collection.model";

@Component({
  selector: 'app-all-collections',
  templateUrl: './all-collections.component.html',
  styleUrls: ['./all-collections.component.css']
})
export class AllCollectionsComponent implements OnInit {
  allCollections: CollectionModel[] = [];
  constructor(private clientSideService: ClientSideService) { }

  ngOnInit() {
    this.clientSideService.getAllCollections().subscribe((result: {collections: CollectionModel[]}) => {
      this.allCollections = result.collections
    })
  }

}
