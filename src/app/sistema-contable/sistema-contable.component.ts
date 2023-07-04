import { Component, OnInit } from '@angular/core';
import { SistemaContableService } from 'src/services/SistemaContable.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ServicioService } from 'src/services/Servicio.service';
import { ServicioModel } from 'src/models/Servicio.model';
import Chart from 'chart.js/auto';
import { Observable, of } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-sistema-contable',
  templateUrl: './sistema-contable.component.html',
  styleUrls: ['./sistema-contable.component.css']
})


export class SistemaContableComponent implements OnInit {
  costo_sin_iva: any[] =[];
  costo_con_iva: any[] =[];
  servicios: ServicioModel[] | undefined;
  date = new Date();
  dateString = this.date.toLocaleDateString().split('/').join('-');
  fileName = `Reporte_Ingresos_CarWash_Excel-(${this.dateString}).xlsx`;
  fileNameChart = `Reporte_Grafica_Ingresos_(${this.dateString}).png`;
  //fileNameChart2 = `Reporte_Grafica_Ingresos_Con_IVA-(${this.dateString}).png`;


  constructor(private servicioService: ServicioService) { }

  async getServicio(): Promise<Observable<ServicioModel[]>> {
    const servicios = await this.servicioService.getServicio();
    return of(servicios);
  }
  
  ngOnInit() {
    this.servicioService.getServicios().subscribe((data: any[])=>{
      this.costo_sin_iva = data.slice(-5).reverse();
      this.costo_con_iva = data.slice(-5).reverse();
      this.createBarChart();
      //this.createBarChart2();
    });
  }

createBarChart() {
const canvas = <HTMLCanvasElement> document.getElementById('myChart');
const ctx = canvas.getContext('2d');

const numBars = this.costo_sin_iva.length;
  const colors = this.generateColors(numBars);
  const colors2 = this.generateColors(numBars);

    new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: this.costo_sin_iva.map(c => c.fecha_registro),
        /*datasets: [{
          label: 'Comparativa ingresos sin IVA $',
          data: this.costo_sin_iva.map(c =>  c.costo_sin_iva),
          //fill: false,
          backgroundColor: colors,
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 3,
          //tension: 0.10
        }]*/
        datasets: [{
          label: 'Comparativa ingresos sin IVA $',
          data: this.costo_sin_iva.map(c =>  c.costo_sin_iva),
          backgroundColor: colors,
          borderColor:colors,
          borderWidth: 3,
        }, {
          label: 'Comparativa ingresos con IVA $',
          data: this.costo_con_iva.map(c => c.costo_con_iva / 1.16),
          backgroundColor: colors2,
          borderColor: colors2,
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: function(context: any) {
                var index = context.dataIndex;
                return index % 2 ? 'red' : 'white'; // Cambia aquí los colores de los labels del eje y
              }
            }
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: function(context: any) {
                var index = context.dataIndex;
                return index % 2 ? 'red' : 'white'; // Cambia aquí los colores de los labels del eje x
              }
            }
          }
        }
      }
    });
  }

  generateColors(numColors: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < numColors; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors.push(`rgba(${r}, ${g}, ${b}, 1)`);
    }
    return colors;
  }
  generateColors2(numColors: number): string[] {
    const colors2: string[] = [];
    for (let i = 0; i < numColors; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors2.push(`rgba(${r}, ${g}, ${b}, 1)`);
    }
    return colors2;
  }

  
      exportToExcel() {
        const data = this.costo_sin_iva;
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, this.fileName);

        const canvas = document.getElementById('myChart') as HTMLCanvasElement;
        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, this.fileNameChart);
          }          
        });

       /* const canvas2 = document.getElementById('myChart') as HTMLCanvasElement;
        canvas2.toBlob((blob) => {
          if (blob) {
            saveAs(blob, this.fileNameChart2);
          }          
        });*/
      }

      
  opcionesVisible = false;

  mostrarOpciones() {
    this.opcionesVisible = !this.opcionesVisible;
  }
}