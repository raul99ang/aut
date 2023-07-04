import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { GastoCompra } from 'src/models/Gastos_compras.model';
@Injectable({
  providedIn: 'root'
})
export class GastosComprasService {

  Lavado2Url: string = `${environment.baseUrl}/Gastos_compras`;
  constructor(private readonly http: HttpClient) {}

  getGastoById(id: number) {
    return lastValueFrom(this.http.get<GastoCompra>(`${this.Lavado2Url}/${id}`));
  }

  getGasto(): Promise<GastoCompra[]> {
    return lastValueFrom(this.http.get<GastoCompra[]>(`${this.Lavado2Url}`));
  }

  post(body: GastoCompra): Promise<GastoCompra> {
    return this.http.post(this.Lavado2Url, body)
      .toPromise()
      .then((response: any) => {
        const gastoCompra: GastoCompra = response as GastoCompra;
        return gastoCompra;
      })
      .catch(/*this.handleError*/);
  }
  

  postGasto(gasto: GastoCompra) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, gasto));
  }
  putGasto(gasto: GastoCompra, id: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, gasto));
  }

  deleteGasto(id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id}`));
  }
}