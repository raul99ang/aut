
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_detEfeTarjModel} from '../models/Tbl_detEfeTarj.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_detEfeTarjService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_detEfeTarj`;
  constructor(private readonly http: HttpClient) {}

  getTbl_detEfeTarjById(id: number) {
    return lastValueFrom(this.http.get<Tbl_detEfeTarjModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_detEfeTarj(): Promise<Tbl_detEfeTarjModel[]> {
    return lastValueFrom(this.http.get<Tbl_detEfeTarjModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_detEfeTarj(tbl_detefetarj: Tbl_detEfeTarjModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_detefetarj));
  }
  putTbl_detEfeTarj(tbl_detefetarj: Tbl_detEfeTarjModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_detefetarj));
  }

  deleteTbl_detEfeTarj(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}