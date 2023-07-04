import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/User.model';
import { UserService } from '../services/User.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-User-detail',
  templateUrl: './User-detail.component.html',
  styleUrls: ['./User-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        user: UserModel = new UserModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly UserService: UserService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.UserService.getUserById(this.id)
        .then((response: any) => {
          this.user = response.cont.User;
        })
        .catch(() => {});
    }
  }

  submitUser(forma: NgForm){
    if (this.isNew)
    {
        this.UserService.postUser(this.user)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "User has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register User"
            });
        });
        } else
        {

            this.UserService.putUser(this.user, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "User has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update User"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    