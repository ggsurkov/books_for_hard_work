import {NgxsModule} from '@ngxs/store';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AdminPanelState} from './state/admin-panel.state';
import {BookPanelPageService} from './book-panel-page/book-panel-page.service';
import {CollectionPanelPageService} from './collection-panel-page/collection-panel-page.service';
import {CollectionPanelPageComponent} from "./collection-panel-page/collection-panel-page.component";
import {BookPanelPageComponent} from "./book-panel-page/book-panel-page.component";
import {AdminPanelPageComponent} from "./container/admin-panel-page.component";
import {CreateFormBookComponent} from "./book-panel-page/create-form-book/create-form-book.component";
import {UpdateFormBookComponent} from "./book-panel-page/update-form-book/update-form-book.component";
import {UpdateCollectionFormComponent} from "./collection-panel-page/update-collection-form/update-collection-form.component";
import {CreateCollectionFormComponent} from "./collection-panel-page/create-collection-form/create-collection-form.component";
import {MaterialDesignModule} from "../../core/material-design.module";
import {SharedModule} from "../../core/shared.module";

@NgModule({
  declarations: [
    AdminPanelPageComponent,
    BookPanelPageComponent,
    CollectionPanelPageComponent,
    CreateFormBookComponent,
    UpdateFormBookComponent,
    CreateCollectionFormComponent,
    UpdateCollectionFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialDesignModule,
    NgxsModule.forFeature([
      AdminPanelState
    ]),
  ],
  providers: [BookPanelPageService, CollectionPanelPageService],
  entryComponents: []
})
export class AdminPanelModule {
}
