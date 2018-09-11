import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PlainBookModel} from "../../../models/plain-book.model";
import {BookModel} from "../../../models/book.model";

@Component({
  selector: 'app-update-form-book',
  templateUrl: './update-form-book.component.html',
  styleUrls: ['./update-form-book.component.css']
})
export class UpdateFormBookComponent implements OnDestroy {
  @Input() selectedEditedBook: BookModel;
  @Output() updateBook: EventEmitter<BookModel> = new EventEmitter<BookModel>();
  constructor() { }

  ngOnDestroy() {

  }
  updateSelectedBook() {
    this.updateBook.emit(this.selectedEditedBook);
  }

  deleteBook() {

  }
}
