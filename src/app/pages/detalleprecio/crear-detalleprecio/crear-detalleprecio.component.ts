import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import { FarmaciaService } from 'src/app/services/farmacia.service';
import { DetalleprecioService } from 'src/app/services/detalleprecio.service';
import { Farmacia } from 'src/app/shared/models/farmacia';
import { Sucursal } from 'src/app/shared/models/sucursal';
import { Detalleprecio } from 'src/app/shared/models/detalleprecio';
import { Producto } from 'src/app/shared/models/producto';

@Component({
  selector: 'app-crear-detalleprecio',
  templateUrl: './crear-detalleprecio.component.html'
})
export class CrearDetalleprecioComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private productoService: ProductoService,
              private farmaciaService: FarmaciaService,
              private sucursalService: SucursalService,
              private detalleprecioService: DetalleprecioService) { }

  Productos = new Array<Producto>();
  Farmacias = new Array<Farmacia>();
  Sucursales = new Array<Sucursal>();
  submittedProductoForm = false;
  dpForm = this.fb.group({
    PrecioFarmaco: ['', Validators.required],
    ProductoIdProducto: ['', Validators.required],
    SucursalIdSucursal: ['', Validators.required],
  });

  ngOnInit() {
    this.getProductos();
    this.getFarmacias();
  }

  farmaciaOnChange(optionValue) {
    if (optionValue !== '') {
      this.getSucursales(optionValue);
    } else {
      this.Sucursales = [];
      this.dpForm.get('SucursalIdSucursal').setValue('');
    }
  }

  onSubmit() {
    this.submittedProductoForm = true;
    // stop here if form is invalid
    if (this.dpForm.invalid) {
      return;
    }

    let detalleprecio: Detalleprecio = new Detalleprecio(this.dpForm.value);
    this.detalleprecioService.add(detalleprecio).subscribe((data) => {
      detalleprecio = new Detalleprecio(data);
      alert('Precio agregado exitósamente');
      this.dpForm.reset();
      this.submittedProductoForm = false;
    });
  }

  // Colecciones
  getProductos() {
    this.productoService
      .getAll()
      .subscribe((data) => {
        this.Productos = data;
      });
  }

  getFarmacias() {
    this.farmaciaService
      .getAll()
      .subscribe((data) => {
        this.Farmacias = data;
      });
  }

  getSucursales(idFarmacia: number) {
    this.sucursalService
      .getByFarmacia(idFarmacia)
      .subscribe((data) => {
        this.Sucursales = data;
      });
  }
}
