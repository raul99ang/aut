
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_FacturasModel} from '../models/Tbl_Facturas.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_FacturasService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Facturas`;
  constructor(private readonly http: HttpClient) {}

  getTbl_FacturasById(id: number) {
    return lastValueFrom(this.http.get<Tbl_FacturasModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Facturas(): Promise<Tbl_FacturasModel[]> {
    return lastValueFrom(this.http.get<Tbl_FacturasModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Facturas(tbl_facturas: Tbl_FacturasModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_facturas));
  }
  putTbl_Facturas(tbl_facturas: Tbl_FacturasModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_facturas));
  }

  deleteTbl_Facturas(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}