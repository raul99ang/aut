import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compras_gastosModel } from 'src/models/Compras_gastos.model';
import { GastoCompra } from 'src/models/Gastos_compras.model';
import { Tbl_EmpleadosModel } from 'src/models/Tbl_Empleados.model';
import { Tbl_GastosModel } from 'src/models/Tbl_Gastos.model';
import { Tbl_SucursalModel } from 'src/models/Tbl_Sucursal.model';
import { Compras_gastosService } from 'src/services/Compras_gastos.service';
import { GastosComprasService } from 'src/services/Gastos_compras.service';
import { Tbl_EmpleadosService } from 'src/services/Tbl_Empleados.service';
import { Tbl_GastosService } from 'src/services/Tbl_Gastos.service';
import { Tbl_SelSucursalService } from 'src/services/Tbl_SelSucursal.service';
import { Tbl_SucursalService } from 'src/services/Tbl_Sucursal.service';
/*import Swal from 'sweetalert2';
import * as nodemailer from 'nodemailer';*/

@Component({
  selector: 'app-gastos-compras',
  templateUrl: './gastos-compras.component.html',
  styleUrls: ['./gastos-compras.component.css'],
})
export class GastosComprasComponent implements OnInit {
  tipoGastos: string[] = ['Efectivo', 'Tarjeta'];
  conceptos: string[] = ['Nomina', 'Otro'];

  nuevoGastoCompra: GastoCompra = {
    id: 0,
    tipoGasto: '',
    concepto: '',
    fecha: new Date(),
    importe: 0,
    recibio: '',
    autoriza: '',
    empleado: '',
    sucursal: '',
  };

  tblEmpleado: Tbl_EmpleadosModel = {
    idEmpleado: 0,
    empleado: '',
    fechaNacimiento: new Date(),
    email: '',
    domicilio: '',
    pais: '',
    facebook: '',
    idTipoEmpleado: 0,
    idGenero: 0,
    idEstadoCivil: 0,
  };

  tblSucursal: Tbl_SucursalModel = {
    id_Sucursal: 0,
    sucursal: '',
    Sucursal: [],
  };

  TblGastoCompra: Tbl_GastosModel = {
    idGasto: 0,
    fecha: new Date(),
    idTipoGasto: 0,
    idConcepto: 0,
    importe: 0,
    idAutoriza: 0,
    recibe: '',
    id_Sucursal: 0,
  };
  sucursalGastos: Tbl_SucursalModel[] = [];
  empleadoGatos: Tbl_EmpleadosModel[] = [];
  tblgastosCompras: Tbl_GastosModel[] = [];
  gastosCompras: GastoCompra[] = [];
  empleadoCompras: any;
  sucursalCompras: any;
  tblGastosCompras: any;

  constructor(
    private readonly gastosComprasService: GastosComprasService,
    private readonly empleadosService: Tbl_EmpleadosService,
    private readonly sucursarlService: Tbl_SucursalService,
    private readonly tbl_gastoCompraService: Tbl_GastosService
  ) {}

  ngOnInit(): void {
    this.tbl_gastoCompraService.getTbl_Gastos().then(
      (response: Tbl_GastosModel[]) => {
        this.tblGastosCompras = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.Empleados();
    this.Sucursal();
  }

  Sucursal() {
    this.sucursarlService.getTbl_Sucursal().then(
      (response: Tbl_SucursalModel[]) => {
        this.sucursalGastos = response;
        this.sucursalCompras = this.sucursalGastos.map(
          (sucursal) => sucursal.sucursal
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  Empleados() {
    this.empleadosService.getTbl_Empleados().then(
      (response: Tbl_EmpleadosModel[]) => {
        this.empleadoGatos = response;
        this.empleadoCompras = this.empleadoGatos.map(
          (empleado) => empleado.empleado
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  registrarGastoCompra(): void {
    this.gastosComprasService
      .post(this.nuevoGastoCompra)
      .then((response: GastoCompra) => {
        this.gastosCompras.push(response);
        this.nuevoGastoCompra = {
          id: 0,
          tipoGasto: '',
          concepto: '',
          fecha: new Date(),
          importe: 0,
          recibio: '',
          autoriza: '',
          empleado: '',
          sucursal: '',
        };
        alert('Gasto o compra registrado con éxito');
      })
      .catch((error: any) => {
        console.log(error);
        alert('Error al registrar el gasto o compra');
      });
  }


  /*getEmpleados(): void {
    this.empleadosService.getTbl_Empleados().then(empleados => {
      this.empleadoGatos = empleados.map(empleado => {
        const empleadoConNombres = {...empleado};
        empleadoConNombres.tipoEmpleadoNombre = this.dataService.getTipoEmpleadoNombre(empleado.idTipoEmpleado);
        empleadoConNombres.generoNombre = this.dataService.getGeneroNombre(empleado.idGenero);
        empleadoConNombres.estadoCivilNombre = this.dataService.getEstadoCivilNombre(empleado.idEstadoCivil);
        return empleadoConNombres;
      });
    });
  }

  getSucursales(): void {
    this.dataService.getSucursales().subscribe(sucursales => {
      this.sucursales = sucursales;
    });
  }*/

  /*TicketCorreo(){
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña',
      },
    });
    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to: 'destinatario@gmail.com',
      subject: 'Comprobante de compra',
      html: '<p>Se ha registrado una compra en el sistema. Adjunto se encuentra el comprobante correspondiente.</p>',
      attachments: [
        {
          filename: 'comprobante.pdf',
          path: 'ruta_del_archivo/comprobante.pdf',
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  };*/
}
