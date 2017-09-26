import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { BaseEnterComponent } from './base-enter/base-enter.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseViewComponent,
    BaseEnterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
