import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFormControlDirective } from './directive/invalid-form-control.directive';
import { InvalidFormDirective } from './directive/invalid-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InvalidFormControlDirective,
    InvalidFormDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
