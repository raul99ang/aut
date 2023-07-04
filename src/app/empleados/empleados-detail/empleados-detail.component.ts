import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Tbl_EmpleadosModel } from 'src/models/Tbl_Empleados.model';
import { Tbl_TipoEmpleadoModel } from 'src/models/Tbl_TipoEmpleado.model';
import { Tbl_EmpleadosService } from 'src/services/Tbl_Empleados.service';
import { Tbl_TipoEmpleadoService } from 'src/services/Tbl_TipoEmpleado.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-empleados-detail',
  templateUrl: './empleados-detail.component.html',
  styleUrls: ['./empleados-detail.component.css'],
})
export class EmpleadosDetailComponent implements OnInit {
  empleados: Tbl_EmpleadosModel[] = [];
  empleadoForm: FormGroup;
  editMode: boolean = false;
  selectedEmpleado: Tbl_EmpleadosModel | undefined;
  terminoBusqueda = '';

  constructor(
    private empleadosService: Tbl_EmpleadosService,
    private fb: FormBuilder,
    private tblTipoEmpleadoService: Tbl_TipoEmpleadoService
  ) {
    this.empleadoForm = this.fb.group({
      empleado: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', Validators.required],
      domicilio: ['', Validators.required],
      pais: ['', Validators.required],
      facebook: [''],
      idTipoEmpleado: ['', Validators.required],
      idGenero: ['', Validators.required],
      idEstadoCivil: ['', Validators.required],
    });
  }

  empleadoTipo: Tbl_TipoEmpleadoModel ={
    idTipoEmpleado: 0 ,
    tipoEmpleado:'',
    sueldoDiario: 0,
  }
  empleadoid!:any[];
  tbl_tipoEmpleado: Tbl_TipoEmpleadoModel[]=[];

  ngOnInit(): void {
    this.loadEmpleados();
    this.loadTipoEmpleados();
    //this.buscarTipoEmpleado();
  }

  /*buscarTipoEmpleado(){
    this.tblTipoEmpleadoService.getTbl_TipoEmpleado().then(
      (response: Tbl_TipoEmpleadoModel[])=>{
        this.tbl_tipoEmpleado = response
        this.empleadoid = this.tbl_tipoEmpleado.map(
          (empleado)=> empleado.tipoEmpleado
          
        )
      }
    )
  }*/
  
  
  loadEmpleados() {
    this.empleadosService.getTbl_Empleados().then((data) => {
      this.empleados = data;
    });
  }

  loadTipoEmpleados() {
    this.tblTipoEmpleadoService.getTbl_TipoEmpleado().then((data) => {
      this.tbl_tipoEmpleado = data;
      
    });
    this.tblTipoEmpleadoService.getTbl_TipoEmpleado().then(
      (response: Tbl_TipoEmpleadoModel[])=>{
        this.tbl_tipoEmpleado = response
        this.empleadoid = this.tbl_tipoEmpleado.map(
          (empleadoid)=> empleadoid.idTipoEmpleado 
        )
        this.empleados  === this.empleadoid
        //console.log(this.empleadoid)
      }
    )
  }

  onSubmit() {
    if (this.editMode) {
      if (this.selectedEmpleado) {
        const empleado = this.empleadoForm.value;
        empleado.idEmpleado = this.selectedEmpleado.idEmpleado;
        this.empleadosService
          .putTbl_Empleados(empleado, empleado.idEmpleado)
          .then(() => {
            this.loadEmpleados();
            this.empleadoForm.reset();
            this.editMode = false;
            this.selectedEmpleado = undefined;
          });
      }
    } else {
      const empleado = this.empleadoForm.value;
      this.empleadosService.postTbl_Empleados(empleado).then(() => {
        this.loadEmpleados();
        this.empleadoForm.reset();
      });
    }
  }

  onDelete(empleado: Tbl_EmpleadosModel) {
    if (
      confirm(
        `¿Está seguro que desea eliminar al empleado ${empleado.empleado}?`
      )
    ) {
      this.empleadosService
        .deleteTbl_Empleados(empleado.idEmpleado)
        .then(() => {
          this.loadEmpleados();
        });
    }
  }

  onEdit(empleado: Tbl_EmpleadosModel) {
    this.selectedEmpleado = empleado;
    this.editMode = true;
    this.empleadoForm.setValue({
      empleado: empleado.empleado,
      fechaNacimiento: empleado.fechaNacimiento,
      email: empleado.email,
      domicilio: empleado.domicilio,
      pais: empleado.pais,
      facebook: empleado.facebook,
      idTipoEmpleado: empleado.idTipoEmpleado,
      idGenero: empleado.idGenero,
      idEstadoCivil: empleado.idEstadoCivil,
    });
  }

  onCancel() {
    this.empleadoForm.reset();
    this.editMode = false;
    this.selectedEmpleado = undefined;
  }
  limpiarForm(forma: NgForm) {
    forma.reset();
  }

  exportToExcel2() {
    const data = this.empleados;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Agregar la fecha actual al nombre del archivo
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fileName = `empleados_${year}-${month}-${day}.xlsx`;

    XLSX.writeFile(wb, fileName);
  }


  filtrarEmpleados(): void {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    if (termino) {
      this.empleadosService.getTbl_Empleados().then((data) => {
        const empleadosFiltrados = data.filter(empleado =>
          empleado.idEmpleado!.toString().includes(termino) ||
          empleado.empleado!.toLowerCase().includes(termino) ||
          empleado.fechaNacimiento!.toString().includes(termino) ||
          empleado.facebook!.toLowerCase().includes(termino) ||
          empleado.idEstadoCivil!.toString().includes(termino) ||
          empleado.idTipoEmpleado!.toString().includes(termino) ||
          empleado.email!.toString().includes(termino) ||
          empleado.idGenero!.toString().includes(termino)
        );
        this.empleados = empleadosFiltrados;
      });
    } else {
      this.loadEmpleados();
    }
  }
}
