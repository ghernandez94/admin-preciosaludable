import { Usuario } from './usuario';

export class Tipousuario {
    idTipoUsuario: number;
    nombreTipoUsuario: string;
    estado?: boolean;
    usuario: Usuario[];
}
