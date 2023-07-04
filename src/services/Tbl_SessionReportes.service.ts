
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_SessionReportesModel} from '../models/Tbl_SessionReportes.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_SessionReportesService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_SessionReportes`;
  constructor(private readonly http: HttpClient) {}

  getTbl_SessionReportesById(id: number) {
    return lastValueFrom(this.http.get<Tbl_SessionReportesModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_SessionReportes(): Promise<Tbl_SessionReportesModel[]> {
    return lastValueFrom(this.http.get<Tbl_SessionReportesModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_SessionReportes(tbl_sessionreportes: Tbl_SessionReportesModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_sessionreportes));
  }
  putTbl_SessionReportes(tbl_sessionreportes: Tbl_SessionReportesModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_sessionreportes));
  }

  deleteTbl_SessionReportes(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}