
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_RelFacturaReimprimeModel} from '../models/Tbl_RelFacturaReimprime.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_RelFacturaReimprimeService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_RelFacturaReimprime`;
  constructor(private readonly http: HttpClient) {}

  getTbl_RelFacturaReimprimeById(id: number) {
    return lastValueFrom(this.http.get<Tbl_RelFacturaReimprimeModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_RelFacturaReimprime(): Promise<Tbl_RelFacturaReimprimeModel[]> {
    return lastValueFrom(this.http.get<Tbl_RelFacturaReimprimeModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_RelFacturaReimprime(tbl_relfacturareimprime: Tbl_RelFacturaReimprimeModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_relfacturareimprime));
  }
  putTbl_RelFacturaReimprime(tbl_relfacturareimprime: Tbl_RelFacturaReimprimeModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_relfacturareimprime));
  }

  deleteTbl_RelFacturaReimprime(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}