
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_FotoempleadoModel} from '../models/Tbl_Fotoempleado.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_FotoempleadoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Fotoempleado`;
  constructor(private readonly http: HttpClient) {}

  getTbl_FotoempleadoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_FotoempleadoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Fotoempleado(): Promise<Tbl_FotoempleadoModel[]> {
    return lastValueFrom(this.http.get<Tbl_FotoempleadoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Fotoempleado(tbl_fotoempleado: Tbl_FotoempleadoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_fotoempleado));
  }
  putTbl_Fotoempleado(tbl_fotoempleado: Tbl_FotoempleadoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_fotoempleado));
  }

  deleteTbl_Fotoempleado(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}