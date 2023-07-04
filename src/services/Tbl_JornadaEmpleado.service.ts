
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_JornadaEmpleadoModel} from '../models/Tbl_JornadaEmpleado.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_JornadaEmpleadoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_JornadaEmpleado`;
  constructor(private readonly http: HttpClient) {}

  getTbl_JornadaEmpleadoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_JornadaEmpleadoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_JornadaEmpleado(): Promise<Tbl_JornadaEmpleadoModel[]> {
    return lastValueFrom(this.http.get<Tbl_JornadaEmpleadoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_JornadaEmpleado(tbl_jornadaempleado: Tbl_JornadaEmpleadoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_jornadaempleado));
  }
  putTbl_JornadaEmpleado(tbl_jornadaempleado: Tbl_JornadaEmpleadoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_jornadaempleado));
  }

  deleteTbl_JornadaEmpleado(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}