
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AreaModel} from '../models/Area.model';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  Lavado2Url: string = `${environment.baseUrl}/Area`;
  constructor(private readonly http: HttpClient) {}

  getAreaById(area: number) {
    return lastValueFrom(this.http.get<AreaModel>(`${this.Lavado2Url}/${area}`));
  }

  getArea(): Promise<AreaModel[]> {
    return lastValueFrom(this.http.get<AreaModel[]>(`${this.Lavado2Url}`));
  }

  postArea(area: AreaModel) {
    
    return lastValueFrom(this.http.post(`${this.Lavado2Url}`, area));
  }
  putArea(area: AreaModel, Area: number) { 
    return lastValueFrom(this.http.put(`${this.Lavado2Url}`, area));
  }

  deleteArea(area: any) {
    return lastValueFrom(this.http.delete(`${this.Lavado2Url}/${area}`));
  }
}