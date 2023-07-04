import { Component, OnInit } from '@angular/core';
import { FormuModel } from '../models/Formu.model';
import Swal from 'sweetalert2';
import { FormuService } from '../services/Formu.service';

@Component({
  selector: 'app-Formu',
  templateUrl: './Formu.component.html',
  styleUrls: ['./Formu.component.css']
})
export class FormuComponent implements OnInit {

mostrarActualizar: boolean = false;
  formuAll: FormuModel[] = [];
  id: number= 0;

  constructor(private readonly FormuService: FormuService) { }

  async ngOnInit() {
    this.formuAll = await this.FormuService.getFormu();
  }

  obtenerFormu() {
    this.FormuService.getFormu()
    .then((response: any) => {
      this.formuAll = response.cont.formuAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idFormu: any) {
    this.id = idFormu;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerFormu();
        }

        eliminar(formu: FormuModel)
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
                this.FormuService.deleteFormu(formu.num_formulario)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerFormu();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Formu."
          });
        })
      }
    })
  }


}