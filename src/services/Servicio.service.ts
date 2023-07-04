
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {ServicioModel} from '../models/Servicio.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  setTablaVisible(arg0: string) {
    throw new Error('Method not implemented.');
  }

  Lavado2Url: string = `${environment.baseUrl}/Servicio`;
  constructor(private readonly http: HttpClient) {}

  getServicioById(id_servicio: number) {
    return lastValueFrom(this.http.get<ServicioModel>(`${this.Lavado2Url}/${id_servicio}`));
  }

  getServicio(): Promise<ServicioModel[]> {
    return lastValueFrom(this.http.get<ServicioModel[]>(`${this.Lavado2Url}`));
  }

  getServicios(): Observable<ServicioModel[]> {
    return this.http.get<ServicioModel[]>(`${this.Lavado2Url}`);
  }

  postServicio(servicio: ServicioModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, servicio));
  }
  putServicio(servicio: ServicioModel, id_serv: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, servicio));
  }

  deleteServicio(id_servicio: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id_servicio}`));
  }
}