
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_RelfacturacliPrepagoModel} from '../models/Tbl_RelfacturacliPrepago.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_RelfacturacliPrepagoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_RelfacturacliPrepago`;
  constructor(private readonly http: HttpClient) {}

  getTbl_RelfacturacliPrepagoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_RelfacturacliPrepagoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_RelfacturacliPrepago(): Promise<Tbl_RelfacturacliPrepagoModel[]> {
    return lastValueFrom(this.http.get<Tbl_RelfacturacliPrepagoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_RelfacturacliPrepago(tbl_relfacturacliprepago: Tbl_RelfacturacliPrepagoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_relfacturacliprepago));
  }
  putTbl_RelfacturacliPrepago(tbl_relfacturacliprepago: Tbl_RelfacturacliPrepagoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_relfacturacliprepago));
  }

  deleteTbl_RelfacturacliPrepago(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}