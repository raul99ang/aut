import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiciosModel } from 'src/models/Servicios.model';
import { ServiciosService } from 'src/services/Servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios-detail',
  templateUrl: './servicios-detail.component.html',
  styleUrls: ['./servicios-detail.component.css']
})
export class ServiciosDetailComponent implements OnInit{
  @Input() id: number = 0;
  isNew: boolean = false;

  servicios: ServiciosModel = new ServiciosModel();
      @Output() emitChange: EventEmitter < any > = new EventEmitter();
      constructor(private readonly ServiciosService: ServiciosService) { }

ngOnInit() : void {

this.isNew = !this.id;

console.log(this.isNew);
if(!this.isNew){
this.ServiciosService.getServiciosById(this.id)
  .then((response: any) => {
    this.servicios = response.cont.Servicios;
  })
  .catch(() => {});
}
}

submitServicios(forma: NgForm){
if (this.isNew)
{
  this.ServiciosService.postServicios(this.servicios)
  .then((response: any) => {
      Swal.fire({
      icon: "success",
  text: "Servicios has been successfully registered"
      });
      // forma.reset();
      this.emitChange.emit();
  })
.catch ((error: any) => {
      Swal.fire({
      icon: "error",
  text: "An error has occurred to register Servicios"
      });
  });
  } else
  {

      this.ServiciosService.putServicios(this.servicios, this.id)
      .then((response: any) => {
          Swal.fire({
          icon: "success",
  text: "Servicios has been successfully updated."
          });
          this.emitChange.emit();
      })
.catch ((error: any) => {
          Swal.fire({
          icon: "error",
  text: "An error has occurred to update Servicios"
          });
      });
      }

  }

  limpiarForm(forma: NgForm){
      forma.reset();
  }

}
