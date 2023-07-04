import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../models/User.model';
import { Token } from '@angular/compiler';
import { lastValueFrom, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUsuarios(): import("../models/User.model").UserModel[] | PromiseLike<import("../models/User.model").UserModel[]> {
    throw new Error('Method not implemented.');
  }

  Lavado2Url: string = `${environment.baseUrl}/User/Login`;
  user: string = '';

  constructor(private http: HttpClient) { }

  public get(body:any){
    return this.http.get(this.Lavado2Url,body);

  }
  
  public post(body: any){
    return this.http.post(this.Lavado2Url,body); 
    
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.Lavado2Url);
  }
  
}
