import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialDesignModule} from '../core/material-design.module';
import { BookPageComponent } from './client-side/book-page/book-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './client-side/main-page/main-page.component';
import { BookCollectionPageComponent } from './client-side/book-collection-page/book-collection-page.component';
import {IconSvgRegistryService} from "../core/helpers/icon.service";
@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    MainPageComponent,
    BookCollectionPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [IconSvgRegistryService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private iconSvgRegistryService: IconSvgRegistryService) {
    iconSvgRegistryService.registerIcons();
  }
}
