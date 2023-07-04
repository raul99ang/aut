
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_detFacturaModel} from '../models/Tbl_detFactura.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_detFacturaService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_detFactura`;
  constructor(private readonly http: HttpClient) {}

  getTbl_detFacturaById(id: number) {
    return lastValueFrom(this.http.get<Tbl_detFacturaModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_detFactura(): Promise<Tbl_detFacturaModel[]> {
    return lastValueFrom(this.http.get<Tbl_detFacturaModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_detFactura(tbl_detfactura: Tbl_detFacturaModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_detfactura));
  }
  putTbl_detFactura(tbl_detfactura: Tbl_detFacturaModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_detfactura));
  }

  deleteTbl_detFactura(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}