import { Component, OnInit } from '@angular/core';
import {ClientSideService} from "../client-side.service";
import {PlainBookModel} from "../../models/plain-book.model";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  allBooks: BookModel[] = [];
  constructor(private clientSideService: ClientSideService) { }

  ngOnInit() {
     this.clientSideService.getAllBooks().subscribe((result: {books: BookModel[]}) => {
       this.allBooks = result.books
    })
  }

}
