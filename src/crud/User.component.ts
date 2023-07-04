import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/User.model';
import Swal from 'sweetalert2';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

mostrarActualizar: boolean = false;
  userAll: UserModel[] = [];
  id: number= 0;

  constructor(private readonly UserService: UserService) { }

  async ngOnInit() {
    this.userAll = await this.UserService.getUser();
  }

  obtenerUser() {
    this.UserService.getUser()
    .then((response: any) => {
      this.userAll = response.cont.userAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idUser: any) {
    this.id = idUser;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerUser();
        }

        eliminar(user: UserModel)
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
                this.UserService.deleteUser(user.id)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerUser();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating User."
          });
        })
      }
    })
  }


}