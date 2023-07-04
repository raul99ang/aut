
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tbl_ConceptosgastosModel} from '../models/Tbl_Conceptosgastos.model';
@Injectable({
  providedIn: 'root'
})
export class Tbl_ConceptosgastosService {

  Bd2x3Url: string = `${environment.baseUrl}/Tbl_Conceptosgastos`;
  constructor(private readonly http: HttpClient) {}

  getTbl_ConceptosgastosById(id: number) {
    return lastValueFrom(this.http.get<Tbl_ConceptosgastosModel>(`${this.Bd2x3Url}/${id}`));
  }

  getTbl_Conceptosgastos(): Promise<Tbl_ConceptosgastosModel[]> {
    return lastValueFrom(this.http.get<Tbl_ConceptosgastosModel[]>(`${this.Bd2x3Url}`));
  }

  postTbl_Conceptosgastos(tbl_conceptosgastos: Tbl_ConceptosgastosModel) {
    
    return lastValueFrom(this.http.post(`${this.Bd2x3Url}`, tbl_conceptosgastos));
  }
  putTbl_Conceptosgastos(tbl_conceptosgastos: Tbl_ConceptosgastosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Bd2x3Url}`, tbl_conceptosgastos));
  }

  deleteTbl_Conceptosgastos(id: any) {
    return lastValueFrom(this.http.delete(`${this.Bd2x3Url}/${id}`));
  }
}