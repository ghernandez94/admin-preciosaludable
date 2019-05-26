import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Principioactivo } from '../shared/models/principioactivo';
import { PrecioSaludableService } from './preciosaludable.service';


@Injectable({
  providedIn: 'root'
})
export class PrincipioActivoService extends PrecioSaludableService {

  getAll(): Observable<Principioactivo> {
    return this.http.get<Principioactivo>(this.endpoint + '/api/principioactivo/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
