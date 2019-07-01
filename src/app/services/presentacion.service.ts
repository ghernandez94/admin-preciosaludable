import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Presentacion } from '../shared/models/presentacion';
import { PrecioSaludableService } from './preciosaludable.service';


@Injectable({
  providedIn: 'root'
})
export class PresentacionService extends PrecioSaludableService {

  getAll(): Observable<Array<Presentacion>> {
    return this.http.get<Array<Presentacion>>(this.endpoint + '/api/presentacion/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
