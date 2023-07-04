import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../models/Vehiculo.model';
import Swal from 'sweetalert2';
import { VehiculoService } from '../services/Vehiculo.service';

@Component({
  selector: 'app-Vehiculo',
  templateUrl: './Vehiculo.component.html',
  styleUrls: ['./Vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

mostrarActualizar: boolean = false;
  vehiculoAll: VehiculoModel[] = [];
  id: number= 0;

  constructor(private readonly VehiculoService: VehiculoService) { }

  async ngOnInit() {
    this.vehiculoAll = await this.VehiculoService.getVehiculo();
  }

  obtenerVehiculo() {
    this.VehiculoService.getVehiculo()
    .then((response: any) => {
      this.vehiculoAll = response.cont.vehiculoAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idVehiculo: any) {
    this.id = idVehiculo;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerVehiculo();
        }

        eliminar(vehiculo: VehiculoModel)
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
                this.VehiculoService.deleteVehiculo(vehiculo.tipo_vehiculo)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerVehiculo();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Vehiculo."
          });
        })
      }
    })
  }


}