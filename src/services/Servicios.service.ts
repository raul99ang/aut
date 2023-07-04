
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {ServiciosModel} from '../models/Servicios.model';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  Lavado2Url: string = `${environment.baseUrl}/Servicios`;
  constructor(private readonly http: HttpClient) {}

  getServiciosById(id_servicios: number) {
    return lastValueFrom(this.http.get<ServiciosModel>(`${this.Lavado2Url}/${id_servicios}`));
  }

  getServicios(): Promise<ServiciosModel[]> {
    return lastValueFrom(this.http.get<ServiciosModel[]>(`${this.Lavado2Url}`));
  }

  postServicios(servicios: ServiciosModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, servicios));
  }
  putServicios(servicios: ServiciosModel, id_servicios: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, servicios));
  }

  deleteServicios(id_servicios: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id_servicios}`));
  }
}