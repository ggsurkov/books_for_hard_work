import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialDesignModule} from '../core/material-design.module';
import {IconSvgRegistryService} from "../core/helpers/icon.service";
import {CdkColumnDef} from "@angular/cdk/table";
import {MenuHeaderComponent} from './components/menu-header/menu-header.component';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {AppRoutingModule} from "./app.routing";
import {AdminPanelModule} from "./admin-side/admin-panel.module";
import {NgxsModule} from "@ngxs/store";
import {ObjectService} from "../core/helpers/object.service";
import {ClientSideModule} from "./client-side/client-side.module";
import {SharedModule} from "../core/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminPanelModule,
    ClientSideModule,
    NgxsModule.forRoot([]),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage
    }),
    NgxsLoggerPluginModule.forRoot({
      // disabled: environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      // disabled: environment.production
    })

  ],
  providers: [IconSvgRegistryService, CdkColumnDef, ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private iconSvgRegistryService: IconSvgRegistryService) {
    iconSvgRegistryService.registerIcons();
  }
}
