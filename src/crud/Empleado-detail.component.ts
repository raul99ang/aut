import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from '../models/Empleado.model';
import { EmpleadoService } from '../services/Empleado.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Empleado-detail',
  templateUrl: './Empleado-detail.component.html',
  styleUrls: ['./Empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        empleado: EmpleadoModel = new EmpleadoModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly EmpleadoService: EmpleadoService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.EmpleadoService.getEmpleadoById(this.id)
        .then((response: any) => {
          this.empleado = response.cont.Empleado;
        })
        .catch(() => {});
    }
  }

  submitEmpleado(forma: NgForm){
    if (this.isNew)
    {
        this.EmpleadoService.postEmpleado(this.empleado)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Empleado has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Empleado"
            });
        });
        } else
        {

            this.EmpleadoService.putEmpleado(this.empleado, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Empleado has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Empleado"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }


        /*cargarFoto(evento: any): void {
            if (evento.target.files && evento.target.files.length > 0) {
              const archivo = evento.target.files[0];
              this.empleado.foto = archivo;
            }
          }*/

    }
    