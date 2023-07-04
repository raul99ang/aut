
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_EstadoCivilModel} from '../models/Tbl_EstadoCivil.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_EstadoCivilService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_EstadoCivil`;
  constructor(private readonly http: HttpClient) {}

  getTbl_EstadoCivilById(id: number) {
    return lastValueFrom(this.http.get<Tbl_EstadoCivilModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_EstadoCivil(): Promise<Tbl_EstadoCivilModel[]> {
    return lastValueFrom(this.http.get<Tbl_EstadoCivilModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_EstadoCivil(tbl_estadocivil: Tbl_EstadoCivilModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_estadocivil));
  }
  putTbl_EstadoCivil(tbl_estadocivil: Tbl_EstadoCivilModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_estadocivil));
  }

  deleteTbl_EstadoCivil(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}