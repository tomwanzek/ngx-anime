import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdToolbarModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BasicAnimationWrapperComponent } from './basic-animation-wrapper/basic-animation-wrapper.component';
import { ExtendedAnimationWrapperComponent } from './extended-animation-wrapper/extended-animation-wrapper.component';
import { ExtendedAnimationComponent } from './extended-animation/extended-animation.component';
import { MultiExtendedAnimationWrapperComponent } from './multi-extended-animation-wrapper/multi-extended-animation-wrapper.component';
import { MultiExtendedAnimationComponent } from './multi-extended-animation/multi-extended-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAnimationWrapperComponent,
    ExtendedAnimationWrapperComponent,
    ExtendedAnimationComponent,
    MultiExtendedAnimationWrapperComponent,
    MultiExtendedAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdIconModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
