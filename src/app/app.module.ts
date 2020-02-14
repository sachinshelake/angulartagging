import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Browser } from 'protractor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaglistComponent } from './component/taglist/taglist.component';

@NgModule({
  declarations: [
    AppComponent,
    TaglistComponent
  ],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
