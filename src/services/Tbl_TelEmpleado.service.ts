
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TelEmpleadoModel} from '../models/Tbl_TelEmpleado.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TelEmpleadoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_TelEmpleado`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TelEmpleadoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TelEmpleadoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_TelEmpleado(): Promise<Tbl_TelEmpleadoModel[]> {
    return lastValueFrom(this.http.get<Tbl_TelEmpleadoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_TelEmpleado(tbl_telempleado: Tbl_TelEmpleadoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_telempleado));
  }
  putTbl_TelEmpleado(tbl_telempleado: Tbl_TelEmpleadoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_telempleado));
  }

  deleteTbl_TelEmpleado(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}