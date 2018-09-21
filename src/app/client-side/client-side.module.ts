import {NgModule} from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {BookCollectionPageComponent} from "./book-collection-page/book-collection-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {MaterialDesignModule} from "../../core/material-design.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../core/shared.module";
import {AllBooksComponent} from './all-books/all-books.component';
import {AllCollectionsComponent} from './all-collections/all-collections.component';
import {ClientSideService} from "./client-side.service";

@NgModule({
  declarations: [
    BookPageComponent,
    MainPageComponent,
    BookCollectionPageComponent,
    AllBooksComponent,
    AllCollectionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialDesignModule,
    NgxsModule.forFeature([
    ]),
  ],
  providers: [ClientSideService],
  entryComponents: [
  ]
})

export class ClientSideModule {

}
