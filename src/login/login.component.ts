import { ResourceLoader } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs';
import { UserModel } from 'src/models/User.model';
import { LoginService } from 'src/services/login.service';
import { UserService } from 'src/services/User.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoading: boolean = false;
  submitted = false;
  login: UserModel=new UserModel();
  user:  UserModel[]=[];
  currentUser: UserModel | undefined;
  
  public form: FormGroup = new FormGroup({});
  @Output() emitirRegistro:EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, private LoginService: LoginService , private cookieService: CookieService, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      user:['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required]],
    });
  }

enviarDatos(forma: NgForm): void {
  this.isLoading = true; // Activar la carga
  console.log(this.login)
  this.LoginService.post(this.login).subscribe(
    (res: any) => {
      console.log(res);
      this.userService.getUsers().subscribe((user) => {
        const User = user.find((u: UserModel) => u.nombre === this.form.value.user);
        if (user) {
          Swal.fire({
            title: `¡Bienvenido ${this.login.nombreusuario}!`,
            confirmButtonText: '¡A trabajar!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this.login = user.nombreusuario;
        } else {
          Swal.fire({
            title: 'Usuario no encontrado',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Registrarse',
            cancelButtonText: 'Cancelar',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.emitirRegistro.emit();
            }
          });
        }
        localStorage.setItem('token', res.token);
        this.cookieService.set('token_access', res.token);
        const decodedHeader = jwtDecode(res.token, { header: true });
        console.log(decodedHeader);
        this.router.navigateByUrl('/Landing');
        this.isLoading = false; // Desactivar la carga
      }, catchError(error => {
        console.error(error);
        Swal.fire({
          title: 'Error al obtener usuarios',
          icon: 'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        this.isLoading = false; // Desactivar la carga en caso de error
        return [];
      }));
    },
    (error) => {
      console.error(error);
      Swal.fire({
        title: 'Hubo un error al recuperar la información, verifica tu conexión o puede que el usuario no exista',
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      this.isLoading = false; // Desactivar la carga en caso de error
    }
  );
  console.log(this.form.value)
}
}
