
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {PromocionesModel} from '../models/Promociones.model';
@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  CarWashUrl: string = `${environment.baseUrl}/Promociones`;
  constructor(private readonly http: HttpClient) {}

  getPromocionesById(Promociones: string) {
    return lastValueFrom(this.http.get<PromocionesModel>(`${this.CarWashUrl}/${Promociones}`));
  }

  getPromociones(): Promise<PromocionesModel[]> {
    return lastValueFrom(this.http.get<PromocionesModel[]>(`${this.CarWashUrl}`));
  }

  postPromociones(promociones: PromocionesModel) {
    
    return lastValueFrom(this.http.post(`${this.CarWashUrl}`, promociones));
  }
  putPromociones(promociones: PromocionesModel, Promociones: string) { 
    return lastValueFrom(this.http.put(`${this.CarWashUrl}`, promociones));
  }

  deletePromociones(Promociones: any) {
    return lastValueFrom(this.http.delete(`${this.CarWashUrl}/${Promociones}`));
  }
}