import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, reusableComponent } from './app.component';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    reusableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
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
