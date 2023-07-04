import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AreaModel } from '../models/Area.model';
import { AreaService } from '../services/Area.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Area-detail',
  templateUrl: './Area-detail.component.html',
  styleUrls: ['./Area-detail.component.css']
})
export class AreaDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        area: AreaModel = new AreaModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AreaService: AreaService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AreaService.getAreaById(this.id)
        .then((response: any) => {
          this.area = response.cont.Area;
        })
        .catch(() => {});
    }
  }

  submitArea(forma: NgForm){
    if (this.isNew)
    {
        this.AreaService.postArea(this.area)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Area has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Area"
            });
        });
        } else
        {

            this.AreaService.putArea(this.area, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Area has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Area"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    