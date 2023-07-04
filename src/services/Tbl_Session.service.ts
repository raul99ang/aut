
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_SessionModel} from '../models/Tbl_Session.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_SessionService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Session`;
  constructor(private readonly http: HttpClient) {}

  getTbl_SessionById(id: number) {
    return lastValueFrom(this.http.get<Tbl_SessionModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Session(): Promise<Tbl_SessionModel[]> {
    return lastValueFrom(this.http.get<Tbl_SessionModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Session(tbl_session: Tbl_SessionModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_session));
  }
  putTbl_Session(tbl_session: Tbl_SessionModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_session));
  }

  deleteTbl_Session(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}