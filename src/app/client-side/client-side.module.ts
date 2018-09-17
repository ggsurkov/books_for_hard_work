import { NgModule } from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {BookCollectionPageComponent} from "./book-collection-page/book-collection-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {MaterialDesignModule} from "../../core/material-design.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from "../components/breadcrumb/breadcrumb.component";
import {SharedModule} from "../../core/shared.module";
import { AllBooksComponent } from './all-books/all-books.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';

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
  providers: [],
  entryComponents: [
  ]
})

export class ClientSideModule {

}
