
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AdicionalesModel} from '../models/Adicionales.model';
@Injectable({
  providedIn: 'root'
})
export class AdicionalesService {

  CarWashUrl: string = `${environment.baseUrl}/Adicionales`;
  constructor(private readonly http: HttpClient) {}

  getAdicionalesById(Adicionales: number) {
    return lastValueFrom(this.http.get<AdicionalesModel>(`${this.CarWashUrl}/${Adicionales}`));
  }

  getAdicionales(): Promise<AdicionalesModel[]> {
    return lastValueFrom(this.http.get<AdicionalesModel[]>(`${this.CarWashUrl}`));
  }

  postAdicionales(adicionales: AdicionalesModel) {
    
    return lastValueFrom(this.http.post(`${this.CarWashUrl}`, adicionales));
  }
  putAdicionales(adicionales: AdicionalesModel, Adicionales: number) { 
    return lastValueFrom(this.http.put(`${this.CarWashUrl}`, adicionales));
  }

  deleteAdicionales(Adicionales: any) {
    return lastValueFrom(this.http.delete(`${this.CarWashUrl}/${Adicionales}`));
  }
}