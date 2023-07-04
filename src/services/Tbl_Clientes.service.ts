
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_ClientesModel} from '../models/Tbl_Clientes.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_ClientesService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Clientes`;
  constructor(private readonly http: HttpClient) {}

  getTbl_ClientesById(id: number) {
    return lastValueFrom(this.http.get<Tbl_ClientesModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Clientes(): Promise<Tbl_ClientesModel[]> {
    return lastValueFrom(this.http.get<Tbl_ClientesModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Clientes(tbl_clientes: Tbl_ClientesModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_clientes));
  }
  putTbl_Clientes(tbl_clientes: Tbl_ClientesModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}/${id}`, tbl_clientes));
  }  

  deleteTbl_Clientes(id: number) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}