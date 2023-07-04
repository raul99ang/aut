
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_MetodopagoModel} from '../models/Tbl_Metodopago.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_MetodopagoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Metodopago`;
  constructor(private readonly http: HttpClient) {}

  getTbl_MetodopagoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_MetodopagoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Metodopago(): Promise<Tbl_MetodopagoModel[]> {
    return lastValueFrom(this.http.get<Tbl_MetodopagoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Metodopago(tbl_metodopago: Tbl_MetodopagoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_metodopago));
  }
  putTbl_Metodopago(tbl_metodopago: Tbl_MetodopagoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_metodopago));
  }

  deleteTbl_Metodopago(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}