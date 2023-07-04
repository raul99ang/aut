import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesModel } from 'src/models/Clientes.model';
import { ServicioModel } from 'src/models/Servicio.model';
import { ClientesService } from 'src/services/Clientes.service';
import { EmpleadoService } from 'src/services/Empleado.service';
import { ServicioService } from 'src/services/Servicio.service';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
/*export class CortesComponent {
  fecha_registro: ServicioModel[]=[];
  fechaRegistro: ClientesModel[]=[];
  fechaInicial: Date | undefined;
  fechaFinal: Date | undefined;
  agrupacion: string = 'fecha';
  corteDeCaja: any[] | undefined;*/
  
 /* constructor(private servicioService: ServicioService, private clientesService: ClientesService, private empleadoService: EmpleadoService,private http: HttpClient) {}*/

  /*generarCorteDeCaja() {
    this.servicioService.getServicios()
    .subscribe(
      (resultados) => {
        this.fecha_registro = resultados;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  generarCorteDeClientes(){
    this.clientesService.getClientes()
    .then(
      (resultados)=>{
        this.fechaRegistro = resultados
      },
      (error:any)=>{
        console.error(error)
      }
    );
  }*/
/*generarbyCorteDeCaja(fechaInicial: Date, fechaFinal: Date, agrupacion: string): Observable<any[]> {
  return this.http.get<any[]>(`/api/corte-de-caja?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}&agrupacion=${agrupacion}`);
}*/
export class CortesComponent implements OnInit {
  servicio!: any[];
  empleados = [];
  clientes!: any[];

  startDate!: Date;
  endDate!: Date;
  constructor(private servicioService: ServicioService, private empleadoService: EmpleadoService, private clienteService: ClientesService) { }



  generarReporte(): void {
    /*const fechaInicial = (<HTMLInputElement>document.getElementById('fechaInicial')).value;
    const fechaFinal = (<HTMLInputElement>document.getElementById('fechaFinal')).value;*/

    const filteredData = this.clientes.filter(cliente => {
      const date = new Date(cliente);
      return date >= this.startDate && date <= this.endDate;
    });

    const filteredCsv = Papa.unparse(filteredData);
    const filename = 'clientes.csv';
    const url = URL.createObjectURL(new Blob([filteredCsv]));
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }




  downloadCsv(): void {
    const filteredData = this.empleados.filter(empleado => {
      const date = new Date(empleado);
      return date >= this.startDate && date <= this.endDate;
    });

    const filteredCsv = Papa.unparse(filteredData);
    const filename = 'empleados.csv';
    const url = URL.createObjectURL(new Blob([filteredCsv]));
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



  ngOnInit() {
    this.servicioService.getServicios().subscribe(servicios => {
      this.servicio = servicios;
    });
  }

  exportToCsv() {
    const filename = 'servicios.csv';
    const header = Object.keys(this.servicio[0]).join(',');
    const rows = this.servicio.map(servicio => Object.values(servicio).join(','));
    const csv = `${header}\n${rows.join('\n')}`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator) {
      const url = URL.createObjectURL(new Blob([csv]));
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } /*else if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      // Safari
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);*/
    else {
      // Otros navegadores
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
