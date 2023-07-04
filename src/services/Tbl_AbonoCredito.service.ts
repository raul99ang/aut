
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_AbonoCreditoModel} from '../models/Tbl_AbonoCredito.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_AbonoCreditoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_AbonoCredito`;
  constructor(private readonly http: HttpClient) {}

  getTbl_AbonoCreditoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_AbonoCreditoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_AbonoCredito(): Promise<Tbl_AbonoCreditoModel[]> {
    return lastValueFrom(this.http.get<Tbl_AbonoCreditoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_AbonoCredito(tbl_abonocredito: Tbl_AbonoCreditoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_abonocredito));
  }
  putTbl_AbonoCredito(tbl_abonocredito: Tbl_AbonoCreditoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_abonocredito));
  }

  deleteTbl_AbonoCredito(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}