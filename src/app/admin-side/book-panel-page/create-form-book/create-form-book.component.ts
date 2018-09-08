import {Component, EventEmitter, OnInit, OnDestroy, ViewChild, Output} from '@angular/core';
import {BookModel, createEmptyBook} from "../../../models/book.model";
import {NgForm} from "@angular/forms";
import {ObjectService} from "../../../../core/helpers/object.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-form-book',
  templateUrl: './create-form-book.component.html',
  styleUrls: ['./create-form-book.component.css']
})
export class CreateFormBookComponent implements OnInit, OnDestroy {
  newBook: BookModel = createEmptyBook();
  imagePreview: string;
  @Output() saveNewBook: EventEmitter<{BookModel}> = new EventEmitter<{BookModel, File}>();

  constructor(private objectService: ObjectService, private http: HttpClient) {

  }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.saveNewBook.unsubscribe();
  }
  saveBook(form: NgForm) {
    if(form.invalid) {
      return;
    } else {
      const newBook = this.objectService.mergeObjects(this.newBook, form.value);
      this.saveNewBook.emit(newBook);
      form.resetForm();
    }
  }

  onImagePicked(event: Event, form: NgForm) {
    const file = (event.target as HTMLInputElement).files[0];
    // form.patchValue({image: file});
    // form.get('image').updateValueAndValidity();
    this.newBook.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }



}
