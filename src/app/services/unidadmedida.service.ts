import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Unidadmedida } from '../shared/models/unidadmedida';
import { PrecioSaludableService } from './preciosaludable.service';


@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService extends PrecioSaludableService {

  getAll(): Observable<Unidadmedida> {
    return this.http.get<Unidadmedida>(this.endpoint + '/api/unidadmedida/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
