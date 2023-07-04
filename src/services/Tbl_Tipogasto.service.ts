
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TipogastoModel} from '../models/Tbl_Tipogasto.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TipogastoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Tipogasto`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TipogastoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TipogastoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Tipogasto(): Promise<Tbl_TipogastoModel[]> {
    return lastValueFrom(this.http.get<Tbl_TipogastoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Tipogasto(tbl_tipogasto: Tbl_TipogastoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_tipogasto));
  }
  putTbl_Tipogasto(tbl_tipogasto: Tbl_TipogastoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_tipogasto));
  }

  deleteTbl_Tipogasto(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}