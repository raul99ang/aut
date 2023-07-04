
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Registro_lavadosModel} from '../models/Registro_lavados.model';
@Injectable({
  providedIn: 'root'
})
export class Registro_lavadosService {

  CarWashUrl: string = `${environment.baseUrl}/Registro_lavados`;
  constructor(private readonly http: HttpClient) {}

  getRegistro_lavadosById(Servicios: number): Observable<Registro_lavadosModel> {
    return this.http.get<Registro_lavadosModel>(`${this.CarWashUrl}/${Servicios}`);
  }

  getRegistro_lavados(): Observable<Registro_lavadosModel[]> {
    return this.http.get<Registro_lavadosModel[]>(`${this.CarWashUrl}`);
  }

  postRegistro_lavados(registro_lavados: Registro_lavadosModel): Observable<any> {
    return this.http.post(`${this.CarWashUrl}`, registro_lavados);
  }

  putRegistro_lavados(registro_lavados: Registro_lavadosModel, Servicios: number): Observable<any> {
    return this.http.put(`${this.CarWashUrl}/${Servicios}`, registro_lavados);
  }

  deleteRegistro_lavados(Servicios: any): Observable<any> {
    return this.http.delete(`${this.CarWashUrl}/${Servicios}`);
  }
}