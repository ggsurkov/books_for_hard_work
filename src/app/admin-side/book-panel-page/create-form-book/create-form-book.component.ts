import { Component, OnInit } from '@angular/core';
import {BookModel, createEmptyBook} from "../../../models/book.model";

@Component({
  selector: 'app-create-form-book',
  templateUrl: './create-form-book.component.html',
  styleUrls: ['./create-form-book.component.css']
})
export class CreateFormBookComponent implements OnInit {
  newBook: BookModel = createEmptyBook();
  constructor() {

  }

  ngOnInit() {

  }
  saveBook(book: BookModel) {
    // TODO post request to save
  }
}
