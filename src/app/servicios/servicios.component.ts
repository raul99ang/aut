import { Component, OnInit } from '@angular/core';
import { ServiciosModel } from 'src/models/Servicios.model';
import { ServiciosService } from 'src/services/Servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  mostrarActualizar: boolean = false;
  serviciosAll: ServiciosModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
servicios: any[]=[];

  constructor(private readonly ServiciosService: ServiciosService) { }

  async ngOnInit() {
    this.serviciosAll = await this.ServiciosService.getServicios();
  }

  obtenerServicios() {
    this.ServiciosService.getServicios()
    .then((response: any) => {
      this.serviciosAll = response.cont.serviciosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idServicios: any) {
    this.id = idServicios;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerServicios();
        }

        eliminar(servicios: ServiciosModel)
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
                this.ServiciosService.deleteServicios(servicios.id_servicios)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerServicios();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Servicios."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.serviciosAll = this.servicios;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.serviciosAll = this.servicios.filter(servicios => 
        servicios.id_servicios.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
}
