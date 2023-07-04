
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tabla_Seleccion2Model} from '../models/Tabla_Seleccion2.model';
@Injectable({
  providedIn: 'root'
})
export class Tabla_Seleccion2Service {

  Bd2x3Url: string = `${environment.baseUrl}/Tabla_Seleccion2`;
  constructor(private readonly http: HttpClient) {}

  getTabla_Seleccion2ById(id: number): Observable<Tabla_Seleccion2Model> {
    return this.http.get<Tabla_Seleccion2Model>(`${this.Bd2x3Url}/${id}`);
  }

  getTabla_Seleccion2(): Observable<Tabla_Seleccion2Model[]> {
    return this.http.get<Tabla_Seleccion2Model[]>(`${this.Bd2x3Url}`);
  }

  postTabla_Seleccion2(tabla_seleccion2: Tabla_Seleccion2Model): Observable<Object> {
    return this.http.post(`${this.Bd2x3Url}`, tabla_seleccion2);
  }

  putTabla_Seleccion2(tabla_seleccion2: Tabla_Seleccion2Model, id: number): Observable<Object> {
    return this.http.put(`${this.Bd2x3Url}`, tabla_seleccion2);
  }

  deleteTabla_Seleccion2(id: any): Observable<Object> {
    return this.http.delete(`${this.Bd2x3Url}/${id}`);
  }
}