import { ConcentracionJoinPipe } from './shared/pipes/concentracion-join.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarProductoComponent } from './pages/producto/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './pages/producto/crear-producto/crear-producto.component';

// Routes
import { APP_ROUTES } from './app.routes';
import { CrearProductoAlternativoComponent } from './pages/producto/crear-producto-alternativo/crear-producto-alternativo.component';
import { CrearDetalleprecioComponent } from './pages/detalleprecio/crear-detalleprecio/crear-detalleprecio.component';
import { ListarPreciosComponent } from './pages/detalleprecio/listar-precios/listar-precios.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ListarProductoComponent,
    CrearProductoComponent,
    CrearProductoAlternativoComponent,
    ConcentracionJoinPipe,
    CrearDetalleprecioComponent,
    ListarPreciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
