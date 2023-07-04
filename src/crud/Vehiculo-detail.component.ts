import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehiculoModel } from '../models/Vehiculo.model';
import { VehiculoService } from '../services/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Vehiculo-detail',
  templateUrl: './Vehiculo-detail.component.html',
  styleUrls: ['./Vehiculo-detail.component.css']
})
export class VehiculoDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        vehiculo: VehiculoModel = new VehiculoModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly VehiculoService: VehiculoService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.VehiculoService.getVehiculoById(this.id)
        .then((response: any) => {
          this.vehiculo = response.cont.Vehiculo;
        })
        .catch(() => {});
    }
  }

  submitVehiculo(forma: NgForm){
    if (this.isNew)
    {
        this.VehiculoService.postVehiculo(this.vehiculo)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Vehiculo has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Vehiculo"
            });
        });
        } else
        {

            this.VehiculoService.putVehiculo(this.vehiculo, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Vehiculo has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Vehiculo"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    