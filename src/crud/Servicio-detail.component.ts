import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicioModel } from '../models/Servicio.model';
import { ServicioService } from '../services/Servicio.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Servicio-detail',
  templateUrl: './Servicio-detail.component.html',
  styleUrls: ['./Servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        servicio: ServicioModel = new ServicioModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly ServicioService: ServicioService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.ServicioService.getServicioById(this.id)
        .then((response: any) => {
          this.servicio = response.cont.Servicio;
        })
        .catch(() => {});
    }
  }

  submitServicio(forma: NgForm){
    if (this.isNew)
    {
        this.ServicioService.postServicio(this.servicio)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Servicio has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Servicio"
            });
        });
        } else
        {

            this.ServicioService.putServicio(this.servicio, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Servicio has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Servicio"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    