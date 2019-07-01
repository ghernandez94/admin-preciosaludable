import { CrearProductoAlternativoComponent } from './pages/producto/crear-producto-alternativo/crear-producto-alternativo.component';
import { ListarProductoComponent } from './pages/producto/listar-producto/listar-producto.component';
import {Routes, RouterModule} from '@angular/router';
import { CrearProductoComponent } from './pages/producto/crear-producto/crear-producto.component';
import { CrearDetalleprecioComponent } from './pages/detalleprecio/crear-detalleprecio/crear-detalleprecio.component';
import { ListarPreciosComponent } from './pages/detalleprecio/listar-precios/listar-precios.component';

const appRoutes: Routes = [
    { path: 'producto', component: ListarProductoComponent},
    { path: 'producto/crear', component: CrearProductoComponent},
    { path: 'producto/crear-alt', component: CrearProductoAlternativoComponent},
    { path: 'precios', component: ListarPreciosComponent},
    { path: 'precios/crear', component: CrearDetalleprecioComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});
