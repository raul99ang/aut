
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_SucursalModel} from '../models/Tbl_Sucursal.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_SucursalService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Sucursal`;
  constructor(private readonly http: HttpClient) {}

  getTbl_SucursalById(id: number) {
    return lastValueFrom(this.http.get<Tbl_SucursalModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Sucursal(): Promise<Tbl_SucursalModel[]> {
    return lastValueFrom(this.http.get<Tbl_SucursalModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Sucursal(tbl_sucursal: Tbl_SucursalModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_sucursal));
  }
  putTbl_Sucursal(tbl_sucursal: Tbl_SucursalModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_sucursal));
  }

  deleteTbl_Sucursal(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}