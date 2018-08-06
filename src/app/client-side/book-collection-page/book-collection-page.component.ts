import { Component, OnInit } from '@angular/core';
import {CollectionModel, createCollectionWithBooks} from "../../../models/collection.model";
import {BookModel, createEmptyBook} from "../../../models/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-collection-page',
  templateUrl: './book-collection-page.component.html',
  styleUrls: ['./book-collection-page.component.css']
})
export class BookCollectionPageComponent implements OnInit {
  collection: CollectionModel = createCollectionWithBooks();
  book1: BookModel = createEmptyBook();
  book2: BookModel = createEmptyBook();
  constructor(private router: Router) { }

  ngOnInit() {
    this.collection.books.push(this.book1);
    this.collection.books.push(this.book2);
  }
  openBook(bookId: string) {
    this.router.navigate([`book/${bookId}`])
  }
}
