import { Concentracion } from './concentracion';
import { Detallecategoriaterapeutica } from './detallecategoriaterapeutica';

export class Principioactivo {
    idPrincipioActivo: number;
    nombrePrincipioActivo: string;
    estado?: boolean;
    concentracion: Concentracion[];
    detallecategoriaterapeutica: Detallecategoriaterapeutica[];
}
