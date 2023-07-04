
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_NominaModel} from '../models/Tbl_Nomina.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_NominaService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Nomina`;
  constructor(private readonly http: HttpClient) {}

  getTbl_NominaById(id: number) {
    return lastValueFrom(this.http.get<Tbl_NominaModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Nomina(): Promise<Tbl_NominaModel[]> {
    return lastValueFrom(this.http.get<Tbl_NominaModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Nomina(tbl_nomina: Tbl_NominaModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_nomina));
  }
  putTbl_Nomina(tbl_nomina: Tbl_NominaModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_nomina));
  }

  deleteTbl_Nomina(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}