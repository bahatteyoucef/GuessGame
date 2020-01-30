import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RandomeComponent } from './randome/randome.component';

@NgModule({
  declarations: [
    AppComponent,    
    RandomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [
    {provide: String, useValue: "'String'"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
