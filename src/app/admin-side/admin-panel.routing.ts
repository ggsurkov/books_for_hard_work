import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelPageComponent} from "./conteiner/admin-panel-page.component";

const routes: Routes = [
  {
    path: '',
    component: AdminPanelPageComponent,
    pathMatch: 'full',
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
