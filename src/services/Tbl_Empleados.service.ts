
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_EmpleadosModel} from '../models/Tbl_Empleados.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_EmpleadosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Empleados`;
  constructor(private readonly http: HttpClient) {}

  getTbl_EmpleadosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_EmpleadosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Empleados(): Promise<Tbl_EmpleadosModel[]> {
    return lastValueFrom(this.http.get<Tbl_EmpleadosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Empleados(tbl_empleados: Tbl_EmpleadosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_empleados));
  }
  putTbl_Empleados(tbl_empleados: Tbl_EmpleadosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_empleados));
  }

  deleteTbl_Empleados(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}