import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListeTaskDirective } from "./directive/listeTask.dir";


@NgModule({
  imports: [ BrowserModule ,FormsModule],
  declarations: [ AppComponent ,ListeTaskDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule { 



}
