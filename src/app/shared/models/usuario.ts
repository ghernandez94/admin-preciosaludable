import { Tipousuario } from './tipousuario';
import { Detalleprecio } from './detalleprecio';

export class Usuario {
    idUsuario: number;
    nombresUsuario: string;
    apPaternoUsuario: string;
    apMaternoUsuario: string;
    emailUsuario: string;
    passwordUsuario: string;
    tipoUsuarioIdTipoUsuario: number;
    estado?: boolean;
    tipoUsuarioIdTipoUsuarioNavigation: Tipousuario;
    detalleprecio: Detalleprecio[];
}
