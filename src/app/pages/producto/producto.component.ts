import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder  } from '@angular/forms';
import { PresentacionService } from '../../services/presentacion.service';
import { PrincipioActivoService } from '../../services/principioactivo.service';
import { UnidadMedidaService } from 'src/app/services/unidadmedida.service';
import { LaboratorioService } from '../../services/laboratorio.service';

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

  productoForm = this.fb.group({
    NombreComercialProducto: [''],
    Farmaco: this.fb.group({
      PresentacionIdPresentacion: [''],
      Concentracion: this.fb.array([])
    }),
    LaboratorioIdLaboratorio: [''],
    CantidadPresentacion: [''],
    ProductoBioequivalente: ['']
  });

  constructor(
    private fb: FormBuilder,
    private presentacionService: PresentacionService,
    private principioactivoService: PrincipioActivoService,
    private unidadmedidaService: UnidadMedidaService,
    private laboratorioService: LaboratorioService,

  ) { }

  ngOnInit() {
    this.addConcentracion();
    this.getPresentaciones();
    this.getPrincipiosActivos();
    this.getLaboratorios();
  }

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

  get concentracion() {
    return this.productoForm.get('Farmaco.Concentracion') as FormArray;
  }

  addConcentracion() {
    this.concentracion.push(this.newConcentracion());
  }

  newConcentracion(): FormGroup {
    return this.fb.group({
      Cantidad: [''],
      UnidadMedidaIdUnidadMedida: [''],
      PrincipioActivoIdPrincipioActivo: ['']
    });
  }

}
