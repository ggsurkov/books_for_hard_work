import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelPageComponent} from "./container/admin-panel-page.component";

const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelPageComponent,
    pathMatch: 'full',
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
