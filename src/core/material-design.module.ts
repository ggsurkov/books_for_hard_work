import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  declarations: []

})
export class MaterialDesignModule {
}
