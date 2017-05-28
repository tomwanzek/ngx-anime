import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCardModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
