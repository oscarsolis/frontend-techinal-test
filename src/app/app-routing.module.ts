// core
import { NgModule } from '@angular/core';

// angular routing
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'application'
  },
  {
    path: 'application',
    loadChildren: './application/application.module#ApplicationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
