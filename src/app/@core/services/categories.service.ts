// core
import { Injectable } from '@angular/core';

//
import { HttpClient } from '@angular/common/http';

// config
import { ENDPOINTS } from 'app/@config/endpoints';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private _http: HttpClient) { }

  /**
   *
   */
  getCategories(): Promise<any> {
    return this._http
      .get(ENDPOINTS.categories)
      .toPromise();
  }
}
