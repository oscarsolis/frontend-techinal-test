// core
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'blako-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private location: Location) { }

  /**
   * Método que me redirige a la página anterior antes de encontrarme con un 404
   */
  backPage(): void {
    this.location.back();
  }
}
