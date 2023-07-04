
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_TokenModel} from '../models/Tbl_Token.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_TokenService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Token`;
  constructor(private readonly http: HttpClient) {}

  getTbl_TokenById(id: number) {
    return lastValueFrom(this.http.get<Tbl_TokenModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Token(): Promise<Tbl_TokenModel[]> {
    return lastValueFrom(this.http.get<Tbl_TokenModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Token(tbl_token: Tbl_TokenModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_token));
  }
  putTbl_Token(tbl_token: Tbl_TokenModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_token));
  }

  deleteTbl_Token(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}