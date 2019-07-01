import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Detalleprecio } from './../shared/models/detalleprecio';
import { PrecioSaludableService } from './preciosaludable.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleprecioService extends PrecioSaludableService {

  getAll(): Observable<Array<Detalleprecio>> {
    return this.http.get<Array<Detalleprecio>>(this.endpoint + '/api/detalleprecio/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  add(detalleprecio: Detalleprecio): Observable<Detalleprecio> {
    return this.http.post<Detalleprecio>(this.endpoint + '/api/detalleprecio', detalleprecio, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
