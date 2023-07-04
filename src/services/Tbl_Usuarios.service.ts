
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_UsuariosModel} from '../models/Tbl_Usuarios.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_UsuariosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Usuarios`;
  constructor(private readonly http: HttpClient) {}

  getTbl_UsuariosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_UsuariosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Usuarios(): Promise<Tbl_UsuariosModel[]> {
    return lastValueFrom(this.http.get<Tbl_UsuariosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Usuarios(tbl_usuarios: Tbl_UsuariosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_usuarios));
  }
  putTbl_Usuarios(tbl_usuarios: Tbl_UsuariosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_usuarios));
  }

  deleteTbl_Usuarios(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}