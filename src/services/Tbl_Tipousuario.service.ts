
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TipousuarioModel} from '../models/Tbl_Tipousuario.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TipousuarioService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Tipousuario`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TipousuarioById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TipousuarioModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Tipousuario(): Promise<Tbl_TipousuarioModel[]> {
    return lastValueFrom(this.http.get<Tbl_TipousuarioModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Tipousuario(tbl_tipousuario: Tbl_TipousuarioModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_tipousuario));
  }
  putTbl_Tipousuario(tbl_tipousuario: Tbl_TipousuarioModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_tipousuario));
  }

  deleteTbl_Tipousuario(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}