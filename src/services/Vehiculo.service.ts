
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {VehiculoModel} from '../models/Vehiculo.model';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  Lavado2Url: string = `${environment.baseUrl}/Vehiculo`;
  constructor(private readonly http: HttpClient) {}

  getVehiculoById(tipo_vehiculo: number) {
    return lastValueFrom(this.http.get<VehiculoModel>(`${this.Lavado2Url}/${tipo_vehiculo}`));
  }

  getVehiculo(): Promise<VehiculoModel[]> {
    return lastValueFrom(this.http.get<VehiculoModel[]>(`${this.Lavado2Url}`));
  }

  postVehiculo(vehiculo: VehiculoModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, vehiculo));
  }
  putVehiculo(vehiculo: VehiculoModel, tipo_veiculo: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, vehiculo));
  }

  deleteVehiculo(tipo_vehiculo: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${tipo_vehiculo}`));
  }
}