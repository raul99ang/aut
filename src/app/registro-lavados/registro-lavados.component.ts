import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { combineLatest, forkJoin, tap } from 'rxjs';
import { Registro_lavadosModel } from 'src/models/Registro_lavados.model';
import { ServicioModel } from 'src/models/Servicio.model';
import { Tabla_Seleccion1Model } from 'src/models/Tabla_Seleccion1.model';
import { Tabla_Seleccion2Model } from 'src/models/Tabla_Seleccion2.model';
import { Tabla_Seleccion3Model } from 'src/models/Tabla_Seleccion3.model';
import { Tbl_ServicioDescuentoModel } from 'src/models/Tbl_ServicioDescuento.model';
import { Tbl_ServiciosModel } from 'src/models/Tbl_Servicios.model';
import { Registro_lavadosService } from 'src/services/Registro_lavados.service';
import { Tabla_Seleccion1Service } from 'src/services/Tabla_Seleccion1.service';
import { Tabla_Seleccion2Service } from 'src/services/Tabla_Seleccion2.service';
import { Tabla_Seleccion3Service } from 'src/services/Tabla_Seleccion3.service';
import { Tbl_ServicioDescuentoService } from 'src/services/Tbl_ServicioDescuento.service';
import { Tbl_ServiciosService } from 'src/services/Tbl_Servicios.service';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-registro-lavados',
  templateUrl: './registro-lavados.component.html',
  styleUrls: ['./registro-lavados.component.css'],
})
//OnInit fue cambiado aqui en implements
export class RegistroLavadosComponent implements AfterViewInit {
  registros!: any[];
  registrosDelDia: number = 0;
  cdr!: ChangeDetectorRef;

  nuevoServicio: Registro_lavadosModel = {
    servicios: '',
    adicionales: '',
    promociones: '',
    detallados: '',
    metodo_pago: '',
    lavados: 0,
    total: 0,
  };

  tblServicios: Tbl_ServiciosModel = {
    idServicio: 0,
    descripcion: '',
    precio: 0,
    seCobra: true,
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

  tblSeleccion: Tabla_Seleccion1Model = {
    clv_Session: 0,
    clv_Id: 0,
    descripcion: '',
  };

  tblSeleccion2: Tabla_Seleccion2Model = {
    clv_Session: 0,
    clv_Id: 0,
    descripcion: '',
  };

  tblSeleccion3: Tabla_Seleccion3Model = {
    clv_Session: 0,
    clv_Id: 0,
    descripcion: '',
  };
  tblServicioDescuentos: Tbl_ServicioDescuentoModel = {
    id: 0,
    idServicio: 0,
    porcentaje: 0,
  };

  servicios: ServicioModel[] = [];
  lavados: Registro_lavadosModel[] = [];
  cantidadTotal: number = 0;
  nombresServicios!: any[];
  nombreAdicionales!: any[];
  nombrePromociones!: any[];
  nombreTblServicios!: any[];
  nombreTblSeleccion!: any[];
  nombreTblSeleccion2!: any[];
  nombreTblSeleccion3!: any[];
  lavadas!: any[];
  numRegistros: number = 0;
  ultimaReinicio!: Date;
  descuentos: Tbl_ServicioDescuentoModel[] = [];
  precioTotal: number = 0;
  tbl_servicios: Tbl_ServiciosModel[] = [];
  tbl_seleccion1: Tabla_Seleccion1Model[] = [];
  tbl_seleccion2: Tabla_Seleccion2Model[] = [];
  tbl_seleccion3: Tabla_Seleccion3Model[] = [];

  constructor(
    private readonly tbl_seleccion1Service: Tabla_Seleccion1Service,
    private readonly tbl_seleccion2Service: Tabla_Seleccion2Service,
    private readonly tbl_seleccion3Service: Tabla_Seleccion3Service,
    private readonly tbl_serviciosService: Tbl_ServiciosService,
    private readonly tbl_serviciosDesceunto: Tbl_ServicioDescuentoService,
    private readonly registrolavados: Registro_lavadosService,
    private readonly registro: Registro_lavadosService,
    private cookieService: CookieService
  ) {}
//Se cambio OnInit por la funcion siguiente, ya que esta carga cuando la vista esta finalizada
  ngAfterViewInit(): void {
    this.registro.getRegistro_lavados().subscribe(
      (response: Registro_lavadosModel[]) => {
        this.lavados = response;
        this.cdr.markForCheck();
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.ServiciosDescuento();
    this.ServiciosService();
    this.Tabla1();
    this.Tabla2();
    this.Tabla3();
    const ultimaReinicioStr = this.cookieService.get('ultima_reinicio');
    if (ultimaReinicioStr) {
      this.ultimaReinicio = new Date(ultimaReinicioStr);
    } else {
      this.ultimaReinicio = new Date();
      this.cookieService.set('ultima_reinicio', this.ultimaReinicio.toString());
    }
    this.actualizarNumRegistros();
    this.reiniciarContador();
    this.calcularPrecioTotal(); /// se movio aqui pero no estaba aqui */
  }

 Tabla1() {
    this.tbl_seleccion1Service.getTabla_Seleccion1().subscribe(
      (response: Tabla_Seleccion1Model[]) => {
        this.tbl_seleccion1 = response;
        this.nombreTblSeleccion = this.tbl_seleccion1.map(
          (servicio) => servicio.descripcion
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  Tabla2() {
    this.tbl_seleccion2Service.getTabla_Seleccion2().subscribe(
      (response: Tabla_Seleccion2Model[]) => {
        this.tbl_seleccion2 = response;
        this.nombreTblSeleccion2 = this.tbl_seleccion2.map(
          (servicio) => servicio.descripcion
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  Tabla3() {
    this.tbl_seleccion3Service.getTabla_Seleccion3().subscribe(
      // verificar este servicio ya que no me trae los datos al Item
      (response: Tabla_Seleccion3Model[]) => {
        this.tbl_seleccion3 = response;
        this.nombreTblSeleccion3 = this.tbl_seleccion3.map(
          (servicio) => servicio.descripcion
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  ServiciosDescuento() {
    this.tbl_serviciosDesceunto
      .getTbl_ServicioDescuento()
      .then((servicioDescuento) => {
        this.descuentos = servicioDescuento;
        this.calcularPrecioTotal();
      });
  }

  ServiciosService() {
    this.tbl_serviciosService.getTbl_Servicios().then(
      (response: Tbl_ServiciosModel[]) => {
        this.tbl_servicios = response;
        this.nombreTblServicios = this.tbl_servicios.map(
          (servicio) => servicio.adicional
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  calcularPrecioTotal(): void {
    // este apartado se agrego recientemente
    if (this.tbl_servicios && this.descuentos) {
      const servicio = this.tbl_servicios.find(
        (s) => s.idServicio === this.tblServicioDescuentos.porcentaje
      );
      if (servicio) {
        //const precioDescuento = servicio.precio * (1 - (this.tblServicioDescuentos.porcentaje));
        const precioDescuento =
          servicio.precio * (1 - this.tblServicioDescuentos.porcentaje / 100);
        this.precioTotal = precioDescuento;
      } else {
        this.precioTotal = this.tblServicios.precio;
      }
    }
  }

  actualizarNumRegistros() {
    this.registrolavados.getRegistro_lavados().subscribe((registros: any[]) => {
      this.numRegistros = registros.length;
    });
  }

  reiniciarContador() {
    this.numRegistros = 0;
    this.ultimaReinicio = new Date();
    this.cookieService.set('ultima_reinicio', this.ultimaReinicio.toString());
  }

  registrarGastoCompra(): void {
    this.registro
    .postRegistro_lavados(this.nuevoServicio)
    .subscribe(
      (response: Object) => {
        const lavados = response as Registro_lavadosModel;
        this.lavados.push(lavados);
        this.nuevoServicio = {
          servicios: '',
          adicionales: '',
          promociones: '',
          detallados: '',
          metodo_pago: '',
          lavados: 0,
          total: 0,
        };
        alert('Registrado con éxito');
      },
      (error: any) => {
        console.log(error);
        alert('Error al registrar');
      }
    );
  }

  seleccionarServicio(servicio: Registro_lavadosModel): void {
    this.nuevoServicio = servicio;
    this.actualizarCantidadTotal();
  }

  actualizarCantidadTotal(): void {
    this.cantidadTotal = this.lavados.reduce(
      (total, servicio) => total + servicio.total,
      0
    );
  }

  borrarServicio(lavados: Registro_lavadosModel): void {
    if (confirm('¿Estás seguro que deseas eliminar este registro?')) {
      this.registro
        .deleteRegistro_lavados(lavados.servicios)
        .subscribe((response: Object) => {
          const index = this.lavados.indexOf(lavados);
          if (index !== -1) {
            this.servicios.splice(index, 1);
            alert('Registro eliminado con éxito');
            this.actualizarCantidadTotal();
          }
        }),
        ((error: any) => {
          console.log(error);
          alert('Error al eliminar el registro');
        });
    }
  }
  //Adaptar datos mios con los del dueño del autolavado, recuerda verificar la tabla para ver los propios y optimizar los foraneos (antiguos)
  borrarServicio2(lavados: Tbl_ServiciosModel): void {
    if (confirm('¿Estás seguro que deseas eliminar este registro?')) {
      this.tbl_serviciosService
        .deleteTbl_Servicios(lavados.idServicio)
        .then((response: Object) => {
          const index = this.tbl_servicios.indexOf(lavados);
          if (index !== -1) {
            this.tbl_servicios.splice(index, 1);
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
}
