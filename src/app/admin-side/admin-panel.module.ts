import {NgxsModule} from '@ngxs/store';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './admin-panel.routing';
import {AdminPanelState} from './state/admin-panel.state';
import {BookPanelPageService} from './book-panel-page/book-panel-page.service';
import {CollectionPanelPageService} from './collection-panel-page/collection-panel-page.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgxsModule.forFeature([
      AdminPanelState
    ]),
  ],
  providers: [BookPanelPageService, CollectionPanelPageService],
  entryComponents: []
})
export class AdminPanelModule {
}
