import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Laboratorio } from '../shared/models/laboratorio';
import { PrecioSaludableService } from './preciosaludable.service';


@Injectable({
  providedIn: 'root'
})
export class LaboratorioService extends PrecioSaludableService {

  getAll(): Observable<Array<Laboratorio>> {
    return this.http.get<Array<Laboratorio>>(this.endpoint + '/api/laboratorio/all', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
