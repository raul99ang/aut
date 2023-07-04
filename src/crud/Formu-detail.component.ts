import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormuModel } from '../models/Formu.model';
import { FormuService } from '../services/Formu.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Formu-detail',
  templateUrl: './Formu-detail.component.html',
  styleUrls: ['./Formu-detail.component.css']
})
export class FormuDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        formu: FormuModel = new FormuModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly FormuService: FormuService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.FormuService.getFormuById(this.id)
        .then((response: any) => {
          this.formu = response.cont.Formu;
        })
        .catch(() => {});
    }
  }

  submitFormu(forma: NgForm){
    if (this.isNew)
    {
        this.FormuService.postFormu(this.formu)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Formu has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Formu"
            });
        });
        } else
        {

            this.FormuService.putFormu(this.formu, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Formu has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Formu"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    