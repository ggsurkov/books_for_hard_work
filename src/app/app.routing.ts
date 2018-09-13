import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookPageComponent} from "./client-side/book-page/book-page.component";
import {MainPageComponent} from "./client-side/main-page/main-page.component";
import {BookCollectionPageComponent} from "./client-side/book-collection-page/book-collection-page.component";
import {AdminPanelPageComponent} from "./admin-side/container/admin-panel-page.component";
import {BookPanelPageComponent} from "./admin-side/book-panel-page/book-panel-page.component";
import {CollectionPanelPageComponent} from "./admin-side/collection-panel-page/collection-panel-page.component";
import {AuthorPageComponent} from "./client-side/author-page/author-page.component";
import {AdminPanelModule} from "./admin-side/admin-panel.module";

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'admin-panel', component: AdminPanelPageComponent, pathMatch: 'full', data: {breadcrumb: 'admin-panel'}},
  {path: 'admin-panel/book-panel', component: BookPanelPageComponent, data: {breadcrumb: 'book-panel'}},
  {path: 'admin-panel/collection-panel', component: CollectionPanelPageComponent, data: {breadcrumb: 'collection-panel'}},
  {path: 'book/:title', component: BookPageComponent, data: {breadcrumb: 'book/:id'}},
  {path: 'book-collection/:title', component: BookCollectionPageComponent, data: {breadcrumb: 'book-collection/:id'}},
  {path: 'author/:title', component: AuthorPageComponent, data: {breadcrumb: 'author/:id'}}
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

