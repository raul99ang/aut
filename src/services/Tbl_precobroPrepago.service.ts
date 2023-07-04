
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_precobroPrepagoModel} from '../models/Tbl_precobroPrepago.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_precobroPrepagoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_precobroPrepago`;
  constructor(private readonly http: HttpClient) {}

  getTbl_precobroPrepagoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_precobroPrepagoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_precobroPrepago(): Promise<Tbl_precobroPrepagoModel[]> {
    return lastValueFrom(this.http.get<Tbl_precobroPrepagoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_precobroPrepago(tbl_precobroprepago: Tbl_precobroPrepagoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_precobroprepago));
  }
  putTbl_precobroPrepago(tbl_precobroprepago: Tbl_precobroPrepagoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_precobroprepago));
  }

  deleteTbl_precobroPrepago(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}