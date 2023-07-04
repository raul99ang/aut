
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_CtrlCombosModel} from '../models/Tbl_CtrlCombos.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_CtrlCombosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_CtrlCombos`;
  constructor(private readonly http: HttpClient) {}

  getTbl_CtrlCombosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_CtrlCombosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_CtrlCombos(): Promise<Tbl_CtrlCombosModel[]> {
    return lastValueFrom(this.http.get<Tbl_CtrlCombosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_CtrlCombos(tbl_ctrlcombos: Tbl_CtrlCombosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_ctrlcombos));
  }
  putTbl_CtrlCombos(tbl_ctrlcombos: Tbl_CtrlCombosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_ctrlcombos));
  }

  deleteTbl_CtrlCombos(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}