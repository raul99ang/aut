
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_detCancelaFacModel} from '../models/Tbl_detCancelaFac.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_detCancelaFacService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_detCancelaFac`;
  constructor(private readonly http: HttpClient) {}

  getTbl_detCancelaFacById(id: number) {
    return lastValueFrom(this.http.get<Tbl_detCancelaFacModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_detCancelaFac(): Promise<Tbl_detCancelaFacModel[]> {
    return lastValueFrom(this.http.get<Tbl_detCancelaFacModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_detCancelaFac(tbl_detcancelafac: Tbl_detCancelaFacModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_detcancelafac));
  }
  putTbl_detCancelaFac(tbl_detcancelafac: Tbl_detCancelaFacModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_detcancelafac));
  }

  deleteTbl_detCancelaFac(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}