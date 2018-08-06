import { Component, OnInit } from '@angular/core';
import {BookModel, createEmptyBook} from "../../../models/book.model";
import {createDefaultsRefInfoButton, RefInfoButtonModel} from "../../../models/ref-info-button.model";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  book: BookModel = createEmptyBook();
  refBtn1: RefInfoButtonModel = createDefaultsRefInfoButton();
  refBtn2: RefInfoButtonModel = createDefaultsRefInfoButton();
  refBtn3: RefInfoButtonModel = createDefaultsRefInfoButton();
  refBtn4: RefInfoButtonModel = createDefaultsRefInfoButton();
  refBtn5: RefInfoButtonModel = createDefaultsRefInfoButton();
  safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.book.refShopButtons.push(this.refBtn1);
    this.book.refShopButtons.push(this.refBtn2);
    this.book.refShopButtons.push(this.refBtn3);
    this.book.refShopButtons.push(this.refBtn4);
    this.book.refShopButtons.push(this.refBtn5);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.book.youtubeReviewVideoCodes[0]}`);
  }

  openRefShop(refUrl: string) {
    window.open(refUrl);
  }
}