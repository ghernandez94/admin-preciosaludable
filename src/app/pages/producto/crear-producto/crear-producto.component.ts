import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

// Services
import { PresentacionService } from 'src/app/services/presentacion.service';
import { PrincipioActivoService } from 'src/app/services/principioactivo.service';
import { UnidadMedidaService } from 'src/app/services/unidadmedida.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { ProductoService } from 'src/app/services/producto.service';

// Models
import { Producto } from 'src/app/shared/models/producto';
import { Presentacion } from 'src/app/shared/models/presentacion';
import { Principioactivo } from 'src/app/shared/models/principioactivo';
import { Unidadmedida } from 'src/app/shared/models/unidadmedida';
import { Laboratorio } from 'src/app/shared/models/laboratorio';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private presentacionService: PresentacionService,
    private principioactivoService: PrincipioActivoService,
    private unidadmedidaService: UnidadMedidaService,
    private laboratorioService: LaboratorioService,
    private productoService: ProductoService
  ) { }

  Presentaciones = new Array<Presentacion>();
  PrincipiosActivos = new Array<Principioactivo>();
  UnidadesMedida = new Array<Unidadmedida>();
  Laboratorios = new Array<Laboratorio>();
  submittedProductoForm = false;
  productoForm = this.fb.group({
    NombreComercialProducto: ['', Validators.required],
    farmacoIdFarmacoNavigation: this.fb.group({
      PresentacionIdPresentacion: ['', Validators.required],
      concentracion: this.fb.array([])
    }),
    LaboratorioIdLaboratorio: ['', Validators.required],
    CantidadPresentacion: ['', Validators.required],
    ProductoBioequivalente: ['']
  });

  ngOnInit() {
    this.addConcentracion();
    this.getPresentaciones();
    this.getPrincipiosActivos();
    this.getLaboratorios();
    this.getUnidadesMedida();
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

  get concentracion() {
    return this.productoForm.get('farmacoIdFarmacoNavigation.concentracion') as FormArray;
  }

  get PresentacionIdPresentacion() {
    return this.productoForm.get('farmacoIdFarmacoNavigation.PresentacionIdPresentacion') as FormArray;
  }

  addConcentracion() {
    this.concentracion.push(this.newConcentracion());
  }

  newConcentracion(): FormGroup {
    return this.fb.group({
      cantidad: ['', Validators.required],
      unidadMedidaIdUnidadMedida: ['', Validators.required],
      principioActivoIdPrincipioActivo: ['', Validators.required]
    });
  }

  // Colecciones
  getPresentaciones() {
    this.presentacionService
      .getAll()
      .subscribe((data) => {
        this.Presentaciones = data;
      });
  }

  getPrincipiosActivos() {
    this.principioactivoService
      .getAll()
      .subscribe((data) => {
        this.PrincipiosActivos = data;
      });
  }

  getUnidadesMedida() {
    this.unidadmedidaService
      .getAll()
      .subscribe((data) => {
        this.UnidadesMedida = data;
      });
  }

  getLaboratorios() {
    this.laboratorioService
      .getAll()
      .subscribe((data) => {
        this.Laboratorios = data;
      });
  }
}
