import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

var routes: Routes =[
  {
    path: 'one',
    loadChildren : () => import('./one/one.module').then(m => m.OneModule)
   }
]

var routes: Routes =[
  {
    path: 'two',
    loadChildren : () => import('./two/two.module').then(m => m.TwoModule)
   }
]