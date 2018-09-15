import {BreadcrumbComponent} from "../app/components/breadcrumb/breadcrumb.component";
import {MaterialDesignModule} from "./material-design.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    MaterialDesignModule,
    FormsModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class SharedModule {

}
