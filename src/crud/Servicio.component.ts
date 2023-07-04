import { Component, OnInit } from '@angular/core';
import { ServicioModel } from '../models/Servicio.model';
import Swal from 'sweetalert2';
import { ServicioService } from '../services/Servicio.service';

@Component({
  selector: 'app-Servicio',
  templateUrl: './Servicio.component.html',
  styleUrls: ['./Servicio.component.css']
})
export class ServicioComponent implements OnInit {

mostrarActualizar: boolean = false;
  servicioAll: ServicioModel[] = [];
  id: number= 0;

  constructor(private readonly ServicioService: ServicioService) { }

  async ngOnInit() {
    this.servicioAll = await this.ServicioService.getServicio();
  }

  obtenerServicio() {
    this.ServicioService.getServicio()
    .then((response: any) => {
      this.servicioAll = response.cont.servicioAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idServicio: any) {
    this.id = idServicio;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerServicio();
        }

        eliminar(servicio: ServicioModel)
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
                this.ServicioService.deleteServicio(servicio.id_servicio)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerServicio();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Servicio."
          });
        })
      }
    })
  }


}