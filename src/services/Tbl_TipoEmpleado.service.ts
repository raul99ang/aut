
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TipoEmpleadoModel} from '../models/Tbl_TipoEmpleado.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TipoEmpleadoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_TipoEmpleado`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TipoEmpleadoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TipoEmpleadoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_TipoEmpleado(): Promise<Tbl_TipoEmpleadoModel[]> {
    return lastValueFrom(this.http.get<Tbl_TipoEmpleadoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_TipoEmpleado(tbl_tipoempleado: Tbl_TipoEmpleadoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_tipoempleado));
  }
  putTbl_TipoEmpleado(tbl_tipoempleado: Tbl_TipoEmpleadoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_tipoempleado));
  }

  deleteTbl_TipoEmpleado(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}