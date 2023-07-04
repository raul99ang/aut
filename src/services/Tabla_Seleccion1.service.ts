
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Tabla_Seleccion1Model} from '../models/Tabla_Seleccion1.model';
@Injectable({
  providedIn: 'root'
})
export class Tabla_Seleccion1Service {

  Bd2x3Url: string = `${environment.baseUrl}/Tabla_Seleccion1`;
  constructor(private readonly http: HttpClient) {}

  getTabla_Seleccion1ById(id: number): Observable<Tabla_Seleccion1Model> {
    return this.http.get<Tabla_Seleccion1Model>(`${this.Bd2x3Url}/${id}`);
  }

  getTabla_Seleccion1(): Observable<Tabla_Seleccion1Model[]> {
    return this.http.get<Tabla_Seleccion1Model[]>(`${this.Bd2x3Url}`);
  }

  postTabla_Seleccion1(tabla_seleccion1: Tabla_Seleccion1Model): Observable<Object> {
    return this.http.post(`${this.Bd2x3Url}`, tabla_seleccion1);
  }
  
  putTabla_Seleccion1(tabla_seleccion1: Tabla_Seleccion1Model, id: number): Observable<Object> { 
    return this.http.put(`${this.Bd2x3Url}/${id}`, tabla_seleccion1);
  }

  deleteTabla_Seleccion1(id: any): Observable<Object> {
    return this.http.delete(`${this.Bd2x3Url}/${id}`);
  }
}