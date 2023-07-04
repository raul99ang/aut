
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_DetefectivoModel} from '../models/Tbl_Detefectivo.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_DetefectivoService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Detefectivo`;
  constructor(private readonly http: HttpClient) {}

  getTbl_DetefectivoById(id: number) {
    return lastValueFrom(this.http.get<Tbl_DetefectivoModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Detefectivo(): Promise<Tbl_DetefectivoModel[]> {
    return lastValueFrom(this.http.get<Tbl_DetefectivoModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Detefectivo(tbl_detefectivo: Tbl_DetefectivoModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_detefectivo));
  }
  putTbl_Detefectivo(tbl_detefectivo: Tbl_DetefectivoModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_detefectivo));
  }

  deleteTbl_Detefectivo(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}