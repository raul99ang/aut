
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_6taGratisModel} from '../models/Tbl_6taGratis.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_6taGratisService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_6taGratis`;
  constructor(private readonly http: HttpClient) {}

  getTbl_6taGratisById(id: number) {
    return lastValueFrom(this.http.get<Tbl_6taGratisModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_6taGratis(): Promise<Tbl_6taGratisModel[]> {
    return lastValueFrom(this.http.get<Tbl_6taGratisModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_6taGratis(tbl_6tagratis: Tbl_6taGratisModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_6tagratis));
  }
  putTbl_6taGratis(tbl_6tagratis: Tbl_6taGratisModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_6tagratis));
  }

  deleteTbl_6taGratis(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}