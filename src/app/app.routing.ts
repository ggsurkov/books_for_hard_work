import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookPageComponent} from "./client-side/book-page/book-page.component";
import {MainPageComponent} from "./client-side/main-page/main-page.component";
import {BookCollectionPageComponent} from "./client-side/book-collection-page/book-collection-page.component";
import {AdminPanelPageComponent} from "./admin-side/container/admin-panel-page.component";
import {BookPanelPageComponent} from "./admin-side/book-panel-page/book-panel-page.component";
import {CollectionPanelPageComponent} from "./admin-side/collection-panel-page/collection-panel-page.component";
import {AdminPanelModule} from "./admin-side/admin-panel.module";
import {AllBooksComponent} from "./client-side/all-books/all-books.component";
import {AllCollectionsComponent} from "./client-side/all-collections/all-collections.component";

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'admin-panel', component: AdminPanelPageComponent, pathMatch: 'full'},
  {path: 'admin-panel/book-panel', component: BookPanelPageComponent},
  {path: 'admin-panel/collection-panel', component: CollectionPanelPageComponent},
  {path: 'book/:title', component: BookPageComponent},
  {path: 'book-collection/:title', component: BookCollectionPageComponent},
  {path: 'all-books', component: AllBooksComponent},
  {path: 'all-collections', component: AllCollectionsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    AdminPanelModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

