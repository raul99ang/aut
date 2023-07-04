
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {ClientesempresarialModel} from '../models/Clientesempresarial.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesempresarialService {

  Lavado2Url: string = `${environment.baseUrl}/Clientesempresarial`;
  constructor(private readonly http: HttpClient) {}

  getClientesempresarialById(id: number) {
    return lastValueFrom(this.http.get<ClientesempresarialModel>(`${this.Lavado2Url}/${id}`));
  }

  getClientesempresarial(): Promise<ClientesempresarialModel[]> {
    return lastValueFrom(this.http.get<ClientesempresarialModel[]>(`${this.Lavado2Url}`));
  }

  postClientesempresarial(clientesempresarial: ClientesempresarialModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, clientesempresarial));
  }
  putClientesempresarial(clientesempresarial: ClientesempresarialModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, clientesempresarial));
  }

  deleteClientesempresarial(id: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${id}`));
  }
}