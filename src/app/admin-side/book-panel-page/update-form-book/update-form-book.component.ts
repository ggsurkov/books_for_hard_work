import {Component, Input, OnInit} from '@angular/core';
import {PlainBookModel} from "../../../models/plain-book.model";
import {BookModel} from "../../../models/book.model";

@Component({
  selector: 'app-update-form-book',
  templateUrl: './update-form-book.component.html',
  styleUrls: ['./update-form-book.component.css']
})
export class UpdateFormBookComponent implements OnInit {
  editedBook: BookModel;
  @Input() set selectedBook(data: PlainBookModel) {
    if (data) {
      this.editedBook.title = data.title;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  updateBook(book: BookModel) {
    // TODO post request for update
  }

  deleteBook() {

  }
}
