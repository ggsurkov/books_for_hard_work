import { NgModule } from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {AuthorPageComponent} from "./author-page/author-page.component";
import {BookCollectionPageComponent} from "./book-collection-page/book-collection-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {MaterialDesignModule} from "../../core/material-design.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from "../components/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [
    BookPageComponent,
    MainPageComponent,
    BookCollectionPageComponent,
    AuthorPageComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
