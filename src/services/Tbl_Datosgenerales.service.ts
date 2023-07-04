
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_DatosgeneralesModel} from '../models/Tbl_Datosgenerales.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_DatosgeneralesService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Datosgenerales`;
  constructor(private readonly http: HttpClient) {}

  getTbl_DatosgeneralesById(id: number) {
    return lastValueFrom(this.http.get<Tbl_DatosgeneralesModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Datosgenerales(): Promise<Tbl_DatosgeneralesModel[]> {
    return lastValueFrom(this.http.get<Tbl_DatosgeneralesModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Datosgenerales(tbl_datosgenerales: Tbl_DatosgeneralesModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_datosgenerales));
  }
  putTbl_Datosgenerales(tbl_datosgenerales: Tbl_DatosgeneralesModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_datosgenerales));
  }

  deleteTbl_Datosgenerales(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}