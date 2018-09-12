import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {BookCollectionPageComponent} from "./book-collection-page/book-collection-page.component";
import {AuthorPageComponent} from "./author-page/author-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
