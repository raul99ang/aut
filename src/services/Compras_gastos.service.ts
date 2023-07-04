
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Compras_gastosModel} from '../models/Compras_gastos.model';
@Injectable({
  providedIn: 'root'
})
export class Compras_gastosService {

  CarWashUrl: string = `${environment.baseUrl}/Compras_gastos`;
  constructor(private readonly http: HttpClient) {}

  getCompras_gastosById(tipo_gasto: number) {
    return lastValueFrom(this.http.get<Compras_gastosModel>(`${this.CarWashUrl}/${tipo_gasto}`));
  }

  getCompras_gastos(): Promise<Compras_gastosModel[]> {
    return lastValueFrom(this.http.get<Compras_gastosModel[]>(`${this.CarWashUrl}`));
  }

  postCompras_gastos(compras_gastos: Compras_gastosModel) {
    
    return lastValueFrom(this.http.post(`${this.CarWashUrl}`, compras_gastos));
  }
  putCompras_gastos(compras_gastos: Compras_gastosModel, tipo_gasto: number) { 
    return lastValueFrom(this.http.put(`${this.CarWashUrl}`, compras_gastos));
  }

  deleteCompras_gastos(tipo_gasto: any) {
    return lastValueFrom(this.http.delete(`${this.CarWashUrl}/${tipo_gasto}`));
  }
}