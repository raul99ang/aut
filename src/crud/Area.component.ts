import { Component, OnInit } from '@angular/core';
import { AreaModel } from '../models/Area.model';
import Swal from 'sweetalert2';
import { AreaService } from '../services/Area.service';

@Component({
  selector: 'app-Area',
  templateUrl: './Area.component.html',
  styleUrls: ['./Area.component.css']
})
export class AreaComponent implements OnInit {

mostrarActualizar: boolean = false;
  areaAll: AreaModel[] = [];
  id: number= 0;

  constructor(private readonly AreaService: AreaService) { }

  async ngOnInit() {
    this.areaAll = await this.AreaService.getArea();
  }

  obtenerArea() {
    this.AreaService.getArea()
    .then((response: any) => {
      this.areaAll = response.cont.areaAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idArea: any) {
    this.id = idArea;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerArea();
        }

        eliminar(area: AreaModel)
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
                this.AreaService.deleteArea(area.area)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerArea();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Area."
          });
        })
      }
    })
  }


}