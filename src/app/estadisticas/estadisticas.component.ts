import { Component, OnInit } from '@angular/core';
import { Tbl_ClientesModel } from 'src/models/Tbl_Clientes.model';
import { Tbl_EmpleadosModel } from 'src/models/Tbl_Empleados.model';
import { Tbl_ServiciosModel } from 'src/models/Tbl_Servicios.model';
import { Tbl_UsuariosModel } from 'src/models/Tbl_Usuarios.model';
import { Tbl_ClientesService } from 'src/services/Tbl_Clientes.service';
import { Tbl_EmpleadosService } from 'src/services/Tbl_Empleados.service';
import { Tbl_ServiciosService } from 'src/services/Tbl_Servicios.service';
import { Tbl_UsuariosService } from 'src/services/Tbl_Usuarios.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  constructor(
    private readonly serviciosService: Tbl_ServiciosService,
    private readonly empleadoService: Tbl_EmpleadosService,
    private readonly clienteServcie: Tbl_ClientesService,
    private readonly usuariosService: Tbl_UsuariosService
  ) {}

  serviciosModel: Tbl_ServiciosModel[] = [];
  empleadoModel: Tbl_EmpleadosModel[] = [];
  clientesModel: Tbl_ClientesModel[] = [];
  usuarioModel: Tbl_UsuariosModel[] = [];

  ngOnInit(): void {
    this.Servicios();
    this.Clientes();
    this.Empleados();
    this.Usuario();
  }

  Servicios() {
    this.serviciosService
      .getTbl_Servicios()
      .then((response: any) => (this.serviciosModel = response));
  }

  Empleados() {
    this.empleadoService
      .getTbl_Empleados()
      .then((response: any) => (this.empleadoModel = response));
  }

  Usuario() {
    this.clienteServcie
      .getTbl_Clientes()
      .then((response: any) => (this.clientesModel = response));
  }

  Clientes(){
    this.clienteServcie
    .getTbl_Clientes()
    .then((response: any) => (this.clientesModel = response));
  }
}
