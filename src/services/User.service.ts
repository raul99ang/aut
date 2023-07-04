import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {UserModel} from '../models/User.model';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Lavado2Url: string = `${environment.baseUrl}/User`;
  constructor(private readonly http: HttpClient, private cookies: CookieService) {}


  getCurrentUsers(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.Lavado2Url}`);
  }

  getUserById(user: number) {
    return lastValueFrom(this.http.get<UserModel>(`${this.Lavado2Url}/${user}`));
  }

  getUser(): Promise<UserModel[]> {
    return lastValueFrom(this.http.get<UserModel[]>(`${this.Lavado2Url}`));
  }

  postUser(user: UserModel) {
    user.estatusid = Number(user.estatusid);
    user.perfilid = Number(user.perfilid);
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, user));
  }
  putUser(user: UserModel, User: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, user));
  }

  deleteUser(user: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${user}`));
  }
getUsers(): Observable<any> {
  return this.http.get<any>(this.Lavado2Url);
}
getUserByName(user: string): Observable<UserModel> {
  return this.http.get<UserModel>(`${this.Lavado2Url}/${user}`);
}
getCurrentUser(): UserModel {
  // Obtiene la información del usuario actualmente autenticado.
  const userString = this.cookies.get('currentUser');
  if (!userString) {
   
  }
  return JSON.parse(userString) as UserModel;
}

isAuthorized(role: string): boolean {
  // Verifica si el usuario tiene el rol adecuado para acceder a la ruta.
  const user = this.getCurrentUser();
  return user && user.role === role;
}
getUserRoles(userId: string): Observable<string[]> {
  return this.http.get<string[]>(`/api/User/${userId}/role`);
}

}