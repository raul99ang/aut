
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TmpServCorteModel} from '../models/Tbl_TmpServCorte.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TmpServCorteService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_TmpServCorte`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TmpServCorteById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TmpServCorteModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_TmpServCorte(): Promise<Tbl_TmpServCorteModel[]> {
    return lastValueFrom(this.http.get<Tbl_TmpServCorteModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_TmpServCorte(tbl_tmpservcorte: Tbl_TmpServCorteModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_tmpservcorte));
  }
  putTbl_TmpServCorte(tbl_tmpservcorte: Tbl_TmpServCorteModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_tmpservcorte));
  }

  deleteTbl_TmpServCorte(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}