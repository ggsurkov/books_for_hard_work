import {NgxsModule} from "@ngxs/store";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {routing} from "./admin-panel.routing";
import {AdminPanelState} from "./state/admin-panel.state";

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
  providers: [],
  entryComponents: []
})
export class AdminPanelModule {
}
