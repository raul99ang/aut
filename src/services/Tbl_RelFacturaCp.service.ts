
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_RelFacturaCpModel} from '../models/Tbl_RelFacturaCp.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_RelFacturaCpService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_RelFacturaCp`;
  constructor(private readonly http: HttpClient) {}

  getTbl_RelFacturaCpById(id: number) {
    return lastValueFrom(this.http.get<Tbl_RelFacturaCpModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_RelFacturaCp(): Promise<Tbl_RelFacturaCpModel[]> {
    return lastValueFrom(this.http.get<Tbl_RelFacturaCpModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_RelFacturaCp(tbl_relfacturacp: Tbl_RelFacturaCpModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_relfacturacp));
  }
  putTbl_RelFacturaCp(tbl_relfacturacp: Tbl_RelFacturaCpModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_relfacturacp));
  }

  deleteTbl_RelFacturaCp(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}