
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {FormuModel} from '../models/Formu.model';
@Injectable({
  providedIn: 'root'
})
export class FormuService {

  Lavado2Url: string = `${environment.baseUrl}/Formulario`;
  constructor(private readonly http: HttpClient) {}

  getFormuById(num_formulario: number) {
    return lastValueFrom(this.http.get<FormuModel>(`${this.Lavado2Url}/${num_formulario}`));
  }

  getFormu(): Promise<FormuModel[]> {
    return lastValueFrom(this.http.get<FormuModel[]>(`${this.Lavado2Url}`));
  }

  postFormu(formu: FormuModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, formu));
  }
  putFormu(formu: FormuModel, num_formulario: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, formu));
  }

  deleteFormu(num_formulario: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${num_formulario}`));
  }
}