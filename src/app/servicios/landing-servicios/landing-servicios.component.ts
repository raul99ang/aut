import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/models/Servicio.model';
import { Tbl_ServiciosModel } from 'src/models/Tbl_Servicios.model';
import { ServicioService } from 'src/services/Servicio.service';
import { Tbl_ServiciosService } from 'src/services/Tbl_Servicios.service';

@Component({
  selector: 'app-landing-servicios',
  templateUrl: './landing-servicios.component.html',
  styleUrls: ['./landing-servicios.component.css']
})
export class LandingServiciosComponent implements OnInit {
  tipoGastos: string[] = ['Efectivo', 'Tarjeta'];
  conceptos: string[] = ['Nomina', 'Otro'];
  registros!: any[];
  registrosDelDia: number = 0;
  
  nuevoServicio: ServicioModel = {
    id_servicio: 0,
    nombre_servicio:  '',
    descripcion: '',
   tipo_vehiculo: '',
   costo_sin_iva: 0,
   costo_con_iva: 0,
    fecha_registro: new Date(), 
    sucursal: ''
  };
  servicios: ServicioModel[] = [];
  cantidadTotal: number = 0;
  nombresServicios!: any[];
  
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


  constructor(private readonly servicioService: ServicioService, private readonly tblServicio: Tbl_ServiciosService) { }

  ngOnInit(): void {
    this.servicioService.getServicio().then(
      (response: ServicioModel[]) => {
        this.servicios = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.servicioService.getServicio().then(
      (response: ServicioModel[]) => {
        this.servicios = response;
        this.nombresServicios = this.servicios.map(servicio => servicio.nombre_servicio);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.Tabla();
  }

  Tabla() {
    this.tblServicio.getTbl_Servicios().then(
      (response: Tbl_ServiciosModel[])=>{
        this.tbl_Servicio = response
      }
    )
  }

  registrarGastoCompra(): void {
    this.servicioService.postServicio(this.nuevoServicio)
      .then((response: Object) => {
        const servicio = response as ServicioModel;
        this.servicios.push(servicio);
        this.nuevoServicio = {
          id_servicio: 0,
          nombre_servicio:  '',
          descripcion: '',
          tipo_vehiculo: '',
          costo_sin_iva: 0,
          costo_con_iva: 0,
          fecha_registro: new Date(), 
          sucursal: ''
        };
        alert('Gasto o compra registrado con éxito');
      })
      .catch((error: any) => {
        console.log(error);
        alert('Error al registrar el gasto o compra');
      });
  }
  
  seleccionarServicio(servicio: ServicioModel): void {
    this.nuevoServicio = servicio;
    this.actualizarCantidadTotal();
  }

  actualizarCantidadTotal(): void {
    this.cantidadTotal = this.servicios.reduce((total, servicio) => total + servicio.costo_con_iva, 0);
  }

  borrarServicio(tblservicio: Tbl_ServiciosModel): void {
    if (confirm('¿Estás seguro que deseas eliminar este registro?')) {
      this.tblServicio.deleteTbl_Servicios(tblservicio.idServicio)
        .then((response: Object) => {
          const index = this.tbl_Servicio.indexOf(tblservicio);
          if (index !== -1) {
            this.tbl_Servicio.splice(index, 1);
            alert('Registro eliminado con éxito');
            this.actualizarCantidadTotal();
          }
        })
        .catch((error: any) => {
          console.log(error);
          alert('Error al eliminar el registro');
        });
    }
  }
  
  actualizarRegistrosDelDia(): void {
    const fechaActual = new Date().toLocaleDateString();
    const cantidadRegistrosDelDia = this.servicios.filter(servicio => servicio.fecha_registro?.toISOString().slice(0, 10) === fechaActual).length;
    this.registrosDelDia = cantidadRegistrosDelDia;
    console.log(`Registros del día: ${this.registrosDelDia}`);
    this.registros.push({
      fecha: fechaActual,
      cantidad: cantidadRegistrosDelDia
    });
  }
}
