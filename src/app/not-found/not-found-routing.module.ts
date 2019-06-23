// core
import { NgModule } from '@angular/core';

// routing
import {
  Routes,
  RouterModule
} from '@angular/router';

// components
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [{
  path: '',
  component: NotFoundComponent,
  data: {
    title: 'Not Found'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
