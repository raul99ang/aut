
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_relFacRefeModel} from '../models/Tbl_relFacRefe.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_relFacRefeService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_relFacRefe`;
  constructor(private readonly http: HttpClient) {}

  getTbl_relFacRefeById(id: number) {
    return lastValueFrom(this.http.get<Tbl_relFacRefeModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_relFacRefe(): Promise<Tbl_relFacRefeModel[]> {
    return lastValueFrom(this.http.get<Tbl_relFacRefeModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_relFacRefe(tbl_relfacrefe: Tbl_relFacRefeModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_relfacrefe));
  }
  putTbl_relFacRefe(tbl_relfacrefe: Tbl_relFacRefeModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_relfacrefe));
  }

  deleteTbl_relFacRefe(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}