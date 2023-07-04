
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_ObsdiaModel} from '../models/Tbl_Obsdia.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_ObsdiaService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Obsdia`;
  constructor(private readonly http: HttpClient) {}

  getTbl_ObsdiaById(id: number) {
    return lastValueFrom(this.http.get<Tbl_ObsdiaModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Obsdia(): Promise<Tbl_ObsdiaModel[]> {
    return lastValueFrom(this.http.get<Tbl_ObsdiaModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Obsdia(tbl_obsdia: Tbl_ObsdiaModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_obsdia));
  }
  putTbl_Obsdia(tbl_obsdia: Tbl_ObsdiaModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_obsdia));
  }

  deleteTbl_Obsdia(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}