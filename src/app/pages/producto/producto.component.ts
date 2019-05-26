import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators  } from '@angular/forms';

// Services
import { PresentacionService } from '../../services/presentacion.service';
import { PrincipioActivoService } from '../../services/principioactivo.service';
import { UnidadMedidaService } from 'src/app/services/unidadmedida.service';
import { LaboratorioService } from '../../services/laboratorio.service';
import { ProductoService } from '../../services/producto.service';

// Models
import { Producto } from '../../shared/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  Presentaciones: any = [];
  PrincipiosActivos: any = [];
  UnidadesMedida: any = [];
  Laboratorios: any = [];
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

  constructor(
    private fb: FormBuilder,
    private presentacionService: PresentacionService,
    private principioactivoService: PrincipioActivoService,
    private unidadmedidaService: UnidadMedidaService,
    private laboratorioService: LaboratorioService,
    private productoService: ProductoService
  ) { }

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



    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productoForm.value))
  }

  // Elementos del formulario
  get NombreComercialProducto() {
    return this.productoForm.get("NombreComercialProducto");
  }

  get LaboratorioIdLaboratorio() {
    return this.productoForm.get("LaboratorioIdLaboratorio");
  }

  get CantidadPresentacion() {
    return this.productoForm.get("CantidadPresentacion");
  }

  get ProductoBioequivalente() {
    return this.productoForm.get("ProductoBioequivalente");
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
      .subscribe((data: {}) => {
        this.Presentaciones = data;
    });
  }

  getPrincipiosActivos() {
    this.principioactivoService
      .getAll()
      .subscribe((data: {}) => {
        this.PrincipiosActivos = data;
    });
  }

  getUnidadesMedida() {
    this.unidadmedidaService
      .getAll()
      .subscribe((data: {}) => {
        this.UnidadesMedida = data;
    });
  }

  getLaboratorios() {
    this.laboratorioService
      .getAll()
      .subscribe((data: {}) => {
        this.Laboratorios = data;
    });
  }
}
