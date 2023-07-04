import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicioModel } from 'src/models/Servicio.model';
import { Tbl_ServiciosModel } from 'src/models/Tbl_Servicios.model';
import { ServicioService } from 'src/services/Servicio.service';
import { Tbl_ServiciosService } from 'src/services/Tbl_Servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css'],
})
export class OpcionComponent implements OnInit {
  tablaVisibleMoto = false;
  tablaVisibleAuto = false;

  tablaVisibleCamioneta = false;
  servicio: ServicioModel[] = [];
  servicioAll: ServicioModel[] = [];
  Moto: any[] = [];
  id: number = 0;
  tblServicios: Tbl_ServiciosModel = {
    idServicio: 0,
    descripcion: '',
    precio: 0,
    seCobra: false,
    promocion: false,
    principal: false,
    adicional: false,
    detallado: false,
    cobraIVA: false,
    aplicaPrep: false,
    esCombo: false,
    numLavadas: 0,
    aplica6taGrat: false,
  };
  tbl_Servicio: Tbl_ServiciosModel[]=[];
  Servicios:any;

  constructor(private readonly ServicioService: ServicioService, private readonly tblServicio: Tbl_ServiciosService) {}
  async ngOnInit() {
    this.servicioAll = await this.ServicioService.getServicio();
    this.Tabla();
  }

  Tabla() {
    this.tblServicio.getTbl_Servicios().then(
      (response: Tbl_ServiciosModel[])=>{
        this.tbl_Servicio = response
        /*this.Servicios = this.tbl_Servicio.map(
          (servicio)=>servicio.precio
        )*/
      }
    )
  }

  async mostrarTablaMoto() {
    this.tablaVisibleMoto = !this.tablaVisibleMoto;
    await this.ServicioService.getServicio()
      .then((response: any) => {
        if (response && response.cont && response.cont.servicioAll) {
          console.log(response);
          const servicioAllFiltered = response.cont.servicioAll.filter(
            (servicio: ServicioModel) => servicio.tipo_vehiculo === 'Moto'
          );
          if (servicioAllFiltered) {
            this.servicioAll = servicioAllFiltered;
          } else {
            console.error(
              'La respuesta de getServicio() no tiene la estructura esperada:',
              response
            );
            // Mostrar un mensaje de error en la interfaz de usuario
          }
        } else {
          console.error(
            'La respuesta de getServicio() no tiene la estructura esperada:',
            response
          );
          // Mostrar un mensaje de error en la interfaz de usuario
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos de servicio:', error);
        // Mostrar un mensaje de error en la interfaz de usuario
      });
  }

  mostrarTablaAuto() {
    this.tablaVisibleAuto = !this.tablaVisibleAuto;
    this.ServicioService.getServicio().then((response: any) => {
      // Filtrar los registros de tipo "Moto"
      this.servicioAll = response.cont.servicioAll.filter(
        (servicio: ServicioModel) => servicio.tipo_vehiculo === 'Carro'
      );
    });
  }

  mostrarTablaCamioneta() {
    this.tablaVisibleCamioneta = !this.tablaVisibleCamioneta;
    this.ServicioService.getServicio().then((response: any) => {
      // Filtrar los registros de tipo "Moto"
      this.servicioAll = response.cont.servicioAll.filter(
        (servicio: ServicioModel) => servicio.tipo_vehiculo === 'Camioneta'
      );
      console.log('this.servicioAll:', this.servicioAll);
    });
  }

  mostrarActualizar: boolean = false;

  obtenerServicio() {
    this.ServicioService.getServicio()
      .then((response: any) => {
        this.servicioAll = response.cont.servicioAll;
      })
      .catch((error: any) => {
        Swal.fire({
          icon: 'error',
          text: error.error.msg,
        });
      });
  }

  actualizar(idServicio: any) {
    this.id = idServicio;
    this.mostrarActualizar = true;
  }

  restableceRegistro() {
    this.mostrarActualizar = false;
    this.id;
    this.obtenerServicio();
  }

  eliminar(servicio: ServicioModel) {
    Swal.fire({
      icon: 'question',
      title: `Are you sure to delete?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ServicioService.deleteServicio(servicio.id_servicio)
          .then((response: any) => {
            Swal.fire({
              icon: 'info',
              text: 'Successfully removed',
            });
            this.obtenerServicio();
          })
          .catch((error: any) => {
            Swal.fire({
              icon: 'error',
              text: 'Error updating Servicio.',
            });
          });
      }
    });
  }
}
