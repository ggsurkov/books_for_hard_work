import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookPageComponent} from "./client-side/book-page/book-page.component";
import {MainPageComponent} from "./client-side/main-page/main-page.component";
import {BookCollectionPageComponent} from "./client-side/book-collection-page/book-collection-page.component";
import {AdminPanelPageComponent} from "./admin-side/admin-panel-page/admin-panel-page.component";
import {BookPanelPageComponent} from "./admin-side/book-panel-page/book-panel-page.component";
import {CollectionPanelPageComponent} from "./admin-side/collection-panel-page/collection-panel-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin-panel', component: AdminPanelPageComponent},
  {path: 'admin-panel/book-panel', component: BookPanelPageComponent},
  {path: 'admin-panel/collection-panel', component: CollectionPanelPageComponent},
  {path: 'book/:id', component: BookPageComponent},
  {path: 'book-collection/:id', component: BookCollectionPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

