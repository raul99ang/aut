
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_SelSucursalModel} from '../models/Tbl_SelSucursal.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_SelSucursalService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_SelSucursal`;
  constructor(private readonly http: HttpClient) {}

  getTbl_SelSucursalById(id: number) {
    return lastValueFrom(this.http.get<Tbl_SelSucursalModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_SelSucursal(): Promise<Tbl_SelSucursalModel[]> {
    return lastValueFrom(this.http.get<Tbl_SelSucursalModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_SelSucursal(tbl_selsucursal: Tbl_SelSucursalModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_selsucursal));
  }
  putTbl_SelSucursal(tbl_selsucursal: Tbl_SelSucursalModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_selsucursal));
  }

  deleteTbl_SelSucursal(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}