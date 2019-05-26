import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Producto } from '../shared/models/producto';
import { PrecioSaludableService } from './preciosaludable.service';


@Injectable({
  providedIn: 'root'
})
export class ProductoService extends PrecioSaludableService {

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post<Producto>(this.endpoint + '/api/producto', producto);
  }
}
