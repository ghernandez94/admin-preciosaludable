import { Concentracion } from './../models/concentracion';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'joinConcentracion' })
export class ConcentracionJoinPipe implements PipeTransform {
  transform(con: Concentracion[]) {
    return con.map(c => `${c.principioActivoIdPrincipioActivoNavigation.nombrePrincipioActivo}
                        ${c.cantidad} ${c.unidadMedidaIdUnidadMedidaNavigation.simboloUnidadMedida}`)
              .join(', ');
  }
}
