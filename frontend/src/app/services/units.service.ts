import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unit } from '../interfaces/unit';

@Injectable({
  providedIn: 'root'
})

export class UnidadesService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/units'
  }

  getUnits(): Observable<Unit[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
    return this.http.get<Unit[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
