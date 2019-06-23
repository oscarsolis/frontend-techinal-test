// core
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  //
  private _updateCart = <Subject<any>>new Subject();
  updateCart = this._updateCart.asObservable();

  constructor() { }

  /**
   *
   */
  triggerUpdateCart(): void {
    this._updateCart.next();
  }
}
