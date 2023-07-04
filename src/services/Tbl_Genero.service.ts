
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_GeneroModel} from '../models/Tbl_Genero.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_GeneroService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Genero`;
  constructor(private readonly http: HttpClient) {}

  getTbl_GeneroById(id: number) {
    return lastValueFrom(this.http.get<Tbl_GeneroModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Genero(): Promise<Tbl_GeneroModel[]> {
    return lastValueFrom(this.http.get<Tbl_GeneroModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Genero(tbl_genero: Tbl_GeneroModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_genero));
  }
  putTbl_Genero(tbl_genero: Tbl_GeneroModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_genero));
  }

  deleteTbl_Genero(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}