
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_RelfacturaclicreditoModel} from '../models/Tbl_Relfacturaclicredito.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_RelfacturaclicreditoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Relfacturaclicredito`;
  constructor(private readonly http: HttpClient) {}

  getTbl_RelfacturaclicreditoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_RelfacturaclicreditoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Relfacturaclicredito(): Promise<Tbl_RelfacturaclicreditoModel[]> {
    return lastValueFrom(this.http.get<Tbl_RelfacturaclicreditoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Relfacturaclicredito(tbl_relfacturaclicredito: Tbl_RelfacturaclicreditoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_relfacturaclicredito));
  }
  putTbl_Relfacturaclicredito(tbl_relfacturaclicredito: Tbl_RelfacturaclicreditoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_relfacturaclicredito));
  }

  deleteTbl_Relfacturaclicredito(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}