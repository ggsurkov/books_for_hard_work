import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
