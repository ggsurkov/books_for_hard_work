import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {BookModel} from "../../../models/book.model";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-form-book',
  templateUrl: './update-form-book.component.html',
  styleUrls: ['./update-form-book.component.css']
})
export class UpdateFormBookComponent implements OnDestroy {
  @Input() selectedEditedBook: BookModel;
  @ViewChild('updateForm') updateForm: NgForm;
  @Output() updateBook: EventEmitter<BookModel> = new EventEmitter<BookModel>();
  @Output() deleteBook: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnDestroy() {
    this.deleteBook.unsubscribe();
    this.updateBook.unsubscribe();
  }
  updateSelectedBook() {
    this.updateBook.emit(this.selectedEditedBook);
    this.updateForm.resetForm();
  }

  deleteSelectedBook() {
    this.deleteBook.emit(this.selectedEditedBook.guid);
    this.updateForm.resetForm();
  }
}
