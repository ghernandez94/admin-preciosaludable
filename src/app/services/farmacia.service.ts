import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Farmacia } from './../shared/models/farmacia';
import { PrecioSaludableService } from './preciosaludable.service';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService extends PrecioSaludableService {

  getAll(): Observable<Array<Farmacia>> {
    return this.http.get<Array<Farmacia>>(this.endpoint + '/api/farmacia/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
