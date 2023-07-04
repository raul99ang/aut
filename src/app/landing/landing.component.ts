import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/services/login.service';
import Swal from 'sweetalert2';
import { UserModel } from 'src/models/User.model';
import { UserService } from 'src/services/User.service';
import jwtDecode from 'jwt-decode';
import { catchError } from 'rxjs';
import { ServicioService } from 'src/services/Servicio.service';
import { ServicioModel } from 'src/models/Servicio.model';
import { Login } from 'src/models/Login.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  isLoading: boolean = false;
  user!: UserModel;
  logins: UserModel[]=[];
  currentUser: any;
  nombreusuario: UserModel[]=[];
  notificacion: ServicioModel[]=[];
  User: any[]=[];
  notifications: Notification[] = [];
  notificationsCount = 10;
 
  
  public form: FormGroup = new FormGroup({});
  @Output() emitirRegistro:EventEmitter<any> = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    public router: Router,
    private loginService: LoginService,
    private userService: UserService,
    private servicioService: ServicioService
  ) {}

 users: UserModel={
  id: 0,

  nombreusuario:'',

  nombre: '',

  apellidopaterno: '',

  apellidomaterno: '',

  contrasenia: '',

  perfilid: 0,

  estatusid: 0,

  role: '',
 }

 user_usuario: any;
 users1: UserModel[]=[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required]],
    });
    this.getUsuarioName();
  }

  getUsuarioName() {
    this.userService.getUser().then(
      (response: UserModel[]) => {
        this.users1 = response;
        this.user_usuario = this.users1.map(
          (usuario) => usuario.nombreusuario
         
        );
        console.log(this.users1)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


/*async getUsuarioNames() {
  try {
    const user = await this.userService.getUser().then();
    const currentUser = user.find((u: UserModel) => u.nombreusuario === localStorage.getItem('token'));
    if (currentUser) {
      this.user = currentUser;
      console.log(`Bienvenido ${currentUser.nombreusuario}`);
    }
  } catch (error) {
    console.error(error);
  }
}*/


Exit(){
  
  Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
  }).then((result) => {
      if(result.isConfirmed){
          localStorage.getItem('token');
          localStorage.removeItem('token');
          this.router.navigateByUrl('/Login');
      }
  })
}




removeNotification(notification: Notification) {
  const index = this.notifications.indexOf(notification);
  if (index > -1) {
    this.notifications.splice(index, 1);
    this.notificationsCount--;
  }
}
}

