import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import { Validators, FormBuilder } from '@angular/forms';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { ProductoService } from 'src/app/services/producto.service';
import { FarmacoService } from 'src/app/services/farmaco.service';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import { Farmaco } from 'src/app/shared/models/farmaco';

@Component({
  selector: 'app-crear-producto-alternativo',
  templateUrl: './crear-producto-alternativo.component.html'
})
export class CrearProductoAlternativoComponent implements OnInit {
  Laboratorios = new Array<Laboratorio>();
  Farmacos = new Array<Farmaco>();
  submittedProductoForm = false;

  productoForm = this.fb.group({
    NombreComercialProducto: ['', Validators.required],
    farmacoIdFarmaco: ['', Validators.required],
    LaboratorioIdLaboratorio: ['', Validators.required],
    CantidadPresentacion: ['', Validators.required],
    ProductoBioequivalente: ['']
  });

  constructor(
    private fb: FormBuilder,
    private laboratorioService: LaboratorioService,
    private farmacoService: FarmacoService,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.getFarmacos();
    this.getLaboratorios();
  }

  onSubmit() {
    this.submittedProductoForm = true;
    // stop here if form is invalid
    if (this.productoForm.invalid) {
      return;
    }

    let producto: Producto = new Producto(this.productoForm.value);
    this.productoService.agregarProducto(producto).subscribe((data: {}) => {
      producto = new Producto(data);
      alert('Producto creado exitósamente');
      this.productoForm.reset();
      this.submittedProductoForm = false;
    });
  }

  // Elementos del formulario
  get NombreComercialProducto() {
    return this.productoForm.get('NombreComercialProducto');
  }

  get LaboratorioIdLaboratorio() {
    return this.productoForm.get('LaboratorioIdLaboratorio');
  }

  get CantidadPresentacion() {
    return this.productoForm.get('CantidadPresentacion');
  }

  get ProductoBioequivalente() {
    return this.productoForm.get('ProductoBioequivalente');
  }

  get farmacoIdFarmaco() {
    return this.productoForm.get('farmacoIdFarmaco');
  }

  // Colecciones
  getLaboratorios() {
    this.laboratorioService
      .getAll()
      .subscribe((data) => {
        this.Laboratorios = data;
    });
  }

  getFarmacos() {
    this.farmacoService
      .getAll()
      .subscribe((data) => {
        this.Farmacos = data;
    });
  }
}
