
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_ServiciosModel} from '../models/Tbl_Servicios.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_ServiciosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Servicios`;
  constructor(private readonly http: HttpClient) {}

  getTbl_ServiciosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_ServiciosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Servicios(): Promise<Tbl_ServiciosModel[]> {
    return lastValueFrom(this.http.get<Tbl_ServiciosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Servicios(tbl_servicios: Tbl_ServiciosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_servicios));
  }
  putTbl_Servicios(tbl_servicios: Tbl_ServiciosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_servicios));
  }

  deleteTbl_Servicios(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}