import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoModel } from 'src/models/Empleado.model';
import { Tbl_EmpleadosModel } from 'src/models/Tbl_Empleados.model';
import { EmpleadoService } from 'src/services/Empleado.service';
import { Tbl_EmpleadosService } from 'src/services/Tbl_Empleados.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})


export class EmpleadosComponent implements OnInit {

  empleados: Tbl_EmpleadosModel[] = [];
  empleadoForm: FormGroup;
  editMode: boolean = false;
  selectedEmpleado: Tbl_EmpleadosModel | undefined;
  fileName = 'empleados.xlsx';
  

  constructor(private empleadosService: Tbl_EmpleadosService, private fb: FormBuilder) {
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

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados() {
    this.empleadosService.getTbl_Empleados().then((data) => {
      this.empleados = data;
      
    });
  }

  onSubmit() {
    if (this.editMode) {
      if (this.selectedEmpleado) {
        const empleado = this.empleadoForm.value;
        empleado.idEmpleado = this.selectedEmpleado.idEmpleado;
        this.empleadosService.putTbl_Empleados(empleado, empleado.idEmpleado).then(() => {
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
    if (confirm(`¿Está seguro que desea eliminar al empleado ${empleado.empleado}?`)) {
      this.empleadosService.deleteTbl_Empleados(empleado.idEmpleado).then(() => {
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
      idEstadoCivil: empleado.idEstadoCivil
    });
  }

  onCancel() {
    this.empleadoForm.reset();
    this.editMode = false;
    this.selectedEmpleado = undefined;
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
    
}