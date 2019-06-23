// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// forms
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

// components
import {
  LoadingComponent,
  CardProductComponent
} from './components';

// directives
import { NotFoundImageDirective } from './directives';

// pipes
import {
  HighlightPipe,
  SortProductsPipe,
  FilterProductsPipe
} from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // components
    LoadingComponent,
    CardProductComponent,

    // directives
    NotFoundImageDirective,

    // pipes
    HighlightPipe,
    SortProductsPipe,
    FilterProductsPipe
  ],
  exports: [
    // components
    LoadingComponent,
    CardProductComponent,

    // directives
    NotFoundImageDirective,

    // pipes
    HighlightPipe,
    SortProductsPipe,
    FilterProductsPipe,

    // modules
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
