import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SucursalModel } from '../models/Sucursal.model';
import { SucursalService } from '../services/Sucursal.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Sucursal-detail',
  templateUrl: './Sucursal-detail.component.html',
  styleUrls: ['./Sucursal-detail.component.css']
})
export class SucursalDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        sucursal: SucursalModel = new SucursalModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly SucursalService: SucursalService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.SucursalService.getSucursalById(this.id)
        .then((response: any) => {
          this.sucursal = response.cont.Sucursal;
        })
        .catch(() => {});
    }
  }

  submitSucursal(forma: NgForm){
    if (this.isNew)
    {
        this.SucursalService.postSucursal(this.sucursal)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Sucursal has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Sucursal"
            });
        });
        } else
        {

            this.SucursalService.putSucursal(this.sucursal, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Sucursal has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Sucursal"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    