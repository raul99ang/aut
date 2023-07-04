
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_GastosModel} from '../models/Tbl_Gastos.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_GastosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Gastos`;
  constructor(private readonly http: HttpClient) {}

  getTbl_GastosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_GastosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Gastos(): Promise<Tbl_GastosModel[]> {
    return lastValueFrom(this.http.get<Tbl_GastosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Gastos(tbl_gastos: Tbl_GastosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_gastos));
  }
  putTbl_Gastos(tbl_gastos: Tbl_GastosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_gastos));
  }

  deleteTbl_Gastos(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}