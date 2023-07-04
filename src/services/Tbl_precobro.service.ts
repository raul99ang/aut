
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_precobroModel} from '../models/Tbl_precobro.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_precobroService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_precobro`;
  constructor(private readonly http: HttpClient) {}

  getTbl_precobroById(id: number) {
    return lastValueFrom(this.http.get<Tbl_precobroModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_precobro(): Promise<Tbl_precobroModel[]> {
    return lastValueFrom(this.http.get<Tbl_precobroModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_precobro(tbl_precobro: Tbl_precobroModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_precobro));
  }
  putTbl_precobro(tbl_precobro: Tbl_precobroModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_precobro));
  }

  deleteTbl_precobro(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}