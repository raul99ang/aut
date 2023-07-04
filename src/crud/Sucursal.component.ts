import { Component, OnInit } from '@angular/core';
import { SucursalModel } from '../models/Sucursal.model';
import Swal from 'sweetalert2';
import { SucursalService } from '../services/Sucursal.service';

@Component({
  selector: 'app-Sucursal',
  templateUrl: './Sucursal.component.html',
  styleUrls: ['./Sucursal.component.css']
})
export class SucursalComponent implements OnInit {

mostrarActualizar: boolean = false;
  sucursalAll: SucursalModel[] = [];
  id: number= 0;

  constructor(private readonly SucursalService: SucursalService) { }

  async ngOnInit() {
    this.sucursalAll = await this.SucursalService.getSucursal();
  }

  obtenerSucursal() {
    this.SucursalService.getSucursal()
    .then((response: any) => {
      this.sucursalAll = response.cont.sucursalAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idSucursal: any) {
    this.id = idSucursal;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerSucursal();
        }

        eliminar(sucursal: SucursalModel)
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
                this.SucursalService.deleteSucursal(sucursal.sucursal)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerSucursal();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Sucursal."
          });
        })
      }
    })
  }


}