import {BreadcrumbComponent} from "../app/components/breadcrumb/breadcrumb.component";
import {MaterialDesignModule} from "./material-design.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BookCardComponent} from "../app/components/book-card/book-card.component";


@NgModule({
  declarations: [
    BreadcrumbComponent,
    BookCardComponent
  ],
  imports: [
    MaterialDesignModule,
    FormsModule
  ],
  exports: [
    BreadcrumbComponent,
    BookCardComponent
  ]
})
export class SharedModule {

}
