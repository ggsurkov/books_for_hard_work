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
  MatSnackBarModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";

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
    MatSlideToggleModule,
    MatTableModule,
    CdkTableModule
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
    MatSlideToggleModule,
    MatTableModule,
    CdkTableModule
  ],
  declarations: []

})
export class MaterialDesignModule {
}
