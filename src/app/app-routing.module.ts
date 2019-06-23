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
  },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
