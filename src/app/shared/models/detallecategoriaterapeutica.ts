import { Categoriaterapeutica } from './categoriaterapeutica';
import { Principioactivo } from './principioactivo';

export class Detallecategoriaterapeutica {
    idDetalleCategoria: number;
    categoriaTerapeuticaIdCategoriaTerapeutica: number;
    princpioActivoIdPrincipioActivo: number;
    categoriaTerapeuticaIdCategoriaTerapeuticaNavigation: Categoriaterapeutica;
    princpioActivoIdPrincipioActivoNavigation: Principioactivo;
}
