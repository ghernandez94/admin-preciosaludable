import {Routes, RouterModule} from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';

const appRoutes: Routes = [
    { path: 'producto', component: ProductoComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});