
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tabla_Seleccion3Model} from '../models/Tabla_Seleccion3.model';
@Injectable({
  providedIn: 'root'
})
export class Tabla_Seleccion3Service {

  Bd2x3Url: string = `${environment.baseUrl}/Tabla_Seleccion3`;
  constructor(private readonly http: HttpClient) {}

  getTabla_Seleccion3ById(id: number): Observable<Tabla_Seleccion3Model> {
    return this.http.get<Tabla_Seleccion3Model>(`${this.Bd2x3Url}/${id}`);
  }

  getTabla_Seleccion3(): Observable<Tabla_Seleccion3Model[]> {
    return this.http.get<Tabla_Seleccion3Model[]>(`${this.Bd2x3Url}`);
  }

  postTabla_Seleccion3(tabla_seleccion3: Tabla_Seleccion3Model): Observable<Object> {
    return this.http.post(`${this.Bd2x3Url}`, tabla_seleccion3);
  }

  putTabla_Seleccion3(tabla_seleccion3: Tabla_Seleccion3Model, id: number): Observable<Object> { 
    return this.http.put(`${this.Bd2x3Url}`, tabla_seleccion3);
  }

  deleteTabla_Seleccion3(id: any): Observable<Object> {
    return this.http.delete(`${this.Bd2x3Url}/${id}`);
  }
}