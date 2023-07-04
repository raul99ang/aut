
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_FacturaspordiaModel} from '../models/Tbl_Facturaspordia.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_FacturaspordiaService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Facturaspordia`;
  constructor(private readonly http: HttpClient) {}

  getTbl_FacturaspordiaById(id: number) {
    return lastValueFrom(this.http.get<Tbl_FacturaspordiaModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Facturaspordia(): Promise<Tbl_FacturaspordiaModel[]> {
    return lastValueFrom(this.http.get<Tbl_FacturaspordiaModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Facturaspordia(tbl_facturaspordia: Tbl_FacturaspordiaModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_facturaspordia));
  }
  putTbl_Facturaspordia(tbl_facturaspordia: Tbl_FacturaspordiaModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_facturaspordia));
  }

  deleteTbl_Facturaspordia(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}