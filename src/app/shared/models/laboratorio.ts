import { Producto } from './producto';

export class Laboratorio {
    idLaboratorio: number;
    rutlaboratorio: string;
    nombreLaboratorio: string;
    telefonoLaboratorio: string;
    estado: boolean;
    producto: Producto[];
}
