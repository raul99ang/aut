
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_PrepagoModel} from '../models/Tbl_Prepago.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_PrepagoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Prepago`;
  constructor(private readonly http: HttpClient) {}

  getTbl_PrepagoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_PrepagoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Prepago(): Promise<Tbl_PrepagoModel[]> {
    return lastValueFrom(this.http.get<Tbl_PrepagoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Prepago(tbl_prepago: Tbl_PrepagoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_prepago));
  }
  putTbl_Prepago(tbl_prepago: Tbl_PrepagoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_prepago));
  }

  deleteTbl_Prepago(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}