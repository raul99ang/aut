import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from '../models/Empleado.model';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../services/Empleado.service';

@Component({
  selector: 'app-Empleado',
  templateUrl: './Empleado.component.html',
  styleUrls: ['./Empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

mostrarActualizar: boolean = false;
  empleadoAll: EmpleadoModel[] = [];
  id: number= 0;

  constructor(private readonly EmpleadoService: EmpleadoService) { }

  async ngOnInit() {
    this.empleadoAll = await this.EmpleadoService.getEmpleado();
  }

  obtenerEmpleado() {
    this.EmpleadoService.getEmpleado()
    .then((response: any) => {
      this.empleadoAll = response.cont.empleadoAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idEmpleado: any) {
    this.id = idEmpleado;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerEmpleado();
        }

        eliminar(empleado: EmpleadoModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.EmpleadoService.deleteEmpleado(empleado.id)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerEmpleado();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Empleado."
          });
        })
      }
    })
  }


}