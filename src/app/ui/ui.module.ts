import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { CovalentCommonModule } from '@covalent/core';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import {CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
            imports: [
              CommonModule,
              FlexLayoutModule,
              MatAutocompleteModule,
              MatButtonModule,
              MatCardModule,
              MatCheckboxModule,
              MatChipsModule,
              MatDatepickerModule,
              MatDialogModule,
              MatExpansionModule,
              MatFormFieldModule,
              MatGridListModule,
              MatIconModule,
              MatInputModule,
              MatListModule,
              MatMenuModule,
              MatProgressBarModule,
              MatProgressSpinnerModule,
              MatRippleModule,
              MatRadioModule,
              MatSelectModule,
              MatSidenavModule,
              MatSnackBarModule,
              MatSortModule,
              MatStepperModule,
              MatTableModule,
              MatTabsModule,
              MatToolbarModule,
              MatTooltipModule,
              CdkTableModule,
              CdkAccordionModule,
              CovalentCommonModule,
              CovalentChartsModule,
              CovalentDynamicFormsModule
            ],
            exports: [
              CommonModule,
              FlexLayoutModule,
              MatAutocompleteModule,
              MatButtonModule,
              MatCardModule,
              MatCheckboxModule,
              MatChipsModule,
              MatDatepickerModule,
              MatDialogModule,
              MatExpansionModule,
              MatFormFieldModule,
              MatGridListModule,
              MatIconModule,
              MatInputModule,
              MatListModule,
              MatMenuModule,
              MatNativeDateModule,
              MatProgressBarModule,
              MatProgressSpinnerModule,
              MatRadioModule,
              MatRippleModule,
              MatSelectModule,
              MatSidenavModule,
              MatSnackBarModule,
              MatSortModule,
              MatStepperModule,
              MatTableModule,
              MatTabsModule,
              MatToolbarModule,
              MatTooltipModule,
              CdkTableModule,
              CdkAccordionModule,
              CovalentCommonModule,
              CovalentChartsModule,
              CovalentDynamicFormsModule
            ]
          })
export class UiModule {
  constructor(overlayContainer: OverlayContainer) {}
}
