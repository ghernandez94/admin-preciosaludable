import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Farmaco } from '../shared/models/farmaco';
import { PrecioSaludableService } from './preciosaludable.service';

@Injectable({
  providedIn: 'root'
})
export class FarmacoService extends PrecioSaludableService {

  getAll(): Observable<Array<Farmaco>> {
    return this.http.get<Array<Farmaco>>(this.endpoint + '/api/farmaco/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
