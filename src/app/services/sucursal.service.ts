import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Sucursal } from './../shared/models/sucursal';
import { PrecioSaludableService } from './preciosaludable.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService extends PrecioSaludableService {

  getByFarmacia(idFarmacia: number): Observable<Array<Sucursal>> {
    return this.http.get<Array<Sucursal>>(this.endpoint + '/api/sucursal/all/' + idFarmacia, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
