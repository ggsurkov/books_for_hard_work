import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialDesignModule} from '../core/material-design.module';
import { BookPageComponent } from './client-side/book-page/book-page.component';
import { MainPageComponent } from './client-side/main-page/main-page.component';
import { BookCollectionPageComponent } from './client-side/book-collection-page/book-collection-page.component';
import {IconSvgRegistryService} from "../core/helpers/icon.service";
import { AdminPanelPageComponent } from './admin-side/container/admin-panel-page.component';
import {BookPanelPageComponent} from "./admin-side/book-panel-page/book-panel-page.component";
import {CollectionPanelPageComponent} from "./admin-side/collection-panel-page/collection-panel-page.component";
import { CreateFormBookComponent } from './admin-side/book-panel-page/create-form-book/create-form-book.component';
import {CdkColumnDef} from "@angular/cdk/table";
import { UpdateFormBookComponent } from './admin-side/book-panel-page/update-form-book/update-form-book.component';
import { CreateCollectionFormComponent } from './admin-side/collection-panel-page/create-collection-form/create-collection-form.component';
import { UpdateCollectionFormComponent } from './admin-side/collection-panel-page/update-collection-form/update-collection-form.component';
import { AuthorPageComponent } from './client-side/author-page/author-page.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import {NgxsStoragePluginModule, StorageOption} from '@ngxs/storage-plugin';
import {environment} from "../environments/environment.prod";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {AppRoutingModule} from "./app.routing";
import {AdminPanelModule} from "./admin-side/admin-panel.module";
import {NgxsModule} from "@ngxs/store";


@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    MainPageComponent,
    BookCollectionPageComponent,
    AdminPanelPageComponent,
    BookPanelPageComponent,
    CollectionPanelPageComponent,
    CreateFormBookComponent,
    UpdateFormBookComponent,
    CreateCollectionFormComponent,
    UpdateCollectionFormComponent,
    AuthorPageComponent,
    MenuHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminPanelModule,
    NgxsModule.forRoot([
    ]),
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
  providers: [IconSvgRegistryService, CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private iconSvgRegistryService: IconSvgRegistryService) {
    iconSvgRegistryService.registerIcons();
  }
}
