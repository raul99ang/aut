import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tbl_EmpleadosModel } from 'src/models/Tbl_Empleados.model';
import { Tbl_NominaModel } from 'src/models/Tbl_Nomina.model';
import { Tbl_TipoEmpleadoModel } from 'src/models/Tbl_TipoEmpleado.model';
import { Tbl_NominaService } from 'src/services/Tbl_Nomina.service';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent implements OnInit {
  @ViewChild('closeAddModal') closeAddModal: any;
  @ViewChild('closeEditModal') closeEditModal: any;
  @ViewChild('modalNomina') modalNomina!: ElementRef;
  nominaForm: FormGroup;
  nominaList!: Tbl_NominaModel[];
  empleados!: Tbl_EmpleadosModel[];
  tiposEmpleado!: Tbl_TipoEmpleadoModel[];
  selectedNomina: Tbl_NominaModel;
  isEditMode = false;
  modalTitle: string = '';
  terminoBusqueda = '';


  constructor(private readonly fb: FormBuilder, private readonly nominaService: Tbl_NominaService) {
    this.nominaForm = this.fb.group({
      fecha: ['', Validators.required],
      idTipoEmpleado: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      rangoPago: ['', Validators.required],
      totalDias: ['', Validators.required],
      importe: ['', Validators.required],
      obs: ['', Validators.required],
      id_Sucursal: ['', Validators.required],
    });
    this.selectedNomina = new Tbl_NominaModel();
  }

  ngOnInit(): void {
    this.getNominaList();
  }
  
  showAddModal() {
    this.modalTitle = "Agregar Nómina";
    this.nominaForm.reset();
    this.nominaForm.setValidators(this.nominaForm.validator);
    if (this.modalNomina) {
      (jQuery(this.modalNomina.nativeElement) as any).modal('show');
    }
  }

  
  
  getNominaList(): void {
    this.modalTitle = 'Nómina';
    this.nominaService.getTbl_Nomina().then(nominaList => {
      this.nominaList = nominaList;
    });
  }

  onSubmit(): void {
    const newNomina = this.nominaForm.value as Tbl_NominaModel;
    if (this.isEditMode) {
      newNomina.idNomina = this.selectedNomina.idNomina;
      this.nominaService.putTbl_Nomina(newNomina, newNomina.idNomina).then(() => {
        this.getNominaList();
        this.resetForm();
        console.log(newNomina,'se mando el submit')
      });
    } else {
      this.nominaService.postTbl_Nomina(newNomina).then(() => {
        this.getNominaList();
        this.resetForm();
        console.log(newNomina,'no se pudo mandar el submit')
      });
    }
  }

  editNomina(nomina: Tbl_NominaModel): void {
    this.isEditMode = true;
    this.selectedNomina = nomina;
    this.nominaForm.patchValue({
      fecha: nomina.fecha,
      idTipoEmpleado: nomina.idTipoEmpleado,
      idEmpleado: nomina.idEmpleado,
      rangoPago: nomina.rangoPago,
      totalDias: nomina.totalDias,
      importe: nomina.importe,
      obs: nomina.obs,
      id_Sucursal: nomina.id_Sucursal,
    });
  }

  deleteNomina(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta nómina?')) {
      this.nominaService.deleteTbl_Nomina(id).then(() => {
        this.getNominaList();
      });
    }
  }

  resetForm(): void {
    this.nominaForm.reset();
    this.selectedNomina = new Tbl_NominaModel();
    this.isEditMode = false;
  }



  filtrarEmpleados(): void {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    if (termino) {
      this.nominaService.getTbl_Nomina().then((data) => {
        const empleadosFiltrados = data.filter(empleado =>
          empleado.idEmpleado!.toString().includes(termino) ||
          empleado.rangoPago!.toLowerCase().includes(termino) ||
          empleado.fecha!.toString().includes(termino) ||
          empleado.obs!.toLowerCase().includes(termino) ||
          empleado.idNomina!.toString().includes(termino) ||
          empleado.idTipoEmpleado!.toString().includes(termino) ||
          empleado.id_Sucursal!.toString().includes(termino) ||
          empleado.totalDias!.toString().includes(termino) ||
          empleado.importe!.toString().includes(termino)
        );
        this.nominaList = empleadosFiltrados;
      });
    } else {
      this. getNominaList();
    }
  }
}
