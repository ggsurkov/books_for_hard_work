import { Component, OnInit } from '@angular/core';
import {AuthorModel, createExampleAuthor} from "../../models/author.model";

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  author: AuthorModel = createExampleAuthor();

  constructor() { }

  ngOnInit() {
  }

  openAuthorBook(guid: String) {

  }
}
