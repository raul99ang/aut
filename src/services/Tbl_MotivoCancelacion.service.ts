
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_MotivoCancelacionModel} from '../models/Tbl_MotivoCancelacion.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_MotivoCancelacionService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_MotivoCancelacion`;
  constructor(private readonly http: HttpClient) {}

  getTbl_MotivoCancelacionById(id: number) {
    return lastValueFrom(this.http.get<Tbl_MotivoCancelacionModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_MotivoCancelacion(): Promise<Tbl_MotivoCancelacionModel[]> {
    return lastValueFrom(this.http.get<Tbl_MotivoCancelacionModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_MotivoCancelacion(tbl_motivocancelacion: Tbl_MotivoCancelacionModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_motivocancelacion));
  }
  putTbl_MotivoCancelacion(tbl_motivocancelacion: Tbl_MotivoCancelacionModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_motivocancelacion));
  }

  deleteTbl_MotivoCancelacion(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}