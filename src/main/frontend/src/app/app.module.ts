import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../module/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UserDataComponent} from './components/user-data/user-data.component';
import {PrescriptionParserComponent} from './components/prescription-parser/prescription-parser.component';
import {PrescriptionOptimizerComponent} from './components/prescription-optimizer/prescription-optimizer.component';
import {StepperComponent} from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    PrescriptionParserComponent,
    PrescriptionOptimizerComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
