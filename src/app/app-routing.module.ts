import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'one', loadChildren: () => import('./one/one.module').then(m => m.OneModule) }, { path: 'two', loadChildren: () => import('./two/two.module').then(m => m.TwoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

