
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_ServicioDescuentoModel} from '../models/Tbl_ServicioDescuento.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_ServicioDescuentoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_ServicioDescuento`;
  constructor(private readonly http: HttpClient) {}

  getTbl_ServicioDescuentoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_ServicioDescuentoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_ServicioDescuento(): Promise<Tbl_ServicioDescuentoModel[]> {
    return lastValueFrom(this.http.get<Tbl_ServicioDescuentoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_ServicioDescuento(tbl_serviciodescuento: Tbl_ServicioDescuentoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_serviciodescuento));
  }
  putTbl_ServicioDescuento(tbl_serviciodescuento: Tbl_ServicioDescuentoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_serviciodescuento));
  }

  deleteTbl_ServicioDescuento(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}