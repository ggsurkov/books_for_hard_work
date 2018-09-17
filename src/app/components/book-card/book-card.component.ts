import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() books: BookModel[];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openBook(bookId: string) {
    this.router.navigate([`book/${bookId}`])
  }
}
