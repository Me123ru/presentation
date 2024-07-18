import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseURL = "http://localhost:8080/api/v1/hospitals";
  
  constructor(private httpClient: HttpClient) { }

  getHospitalList(): Observable<Hospital[]>{
    return this.httpClient.get<Hospital[]>(`${this.baseURL}`);
  }

  registerHospital(hospital: Hospital): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hospital);
  }

  getHospitalById(id: number): Observable<Hospital>{
    return this.httpClient.get<Hospital>(`${this.baseURL}/${id}`);
  }

  updateHospital(id: number, hospital: Hospital): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, hospital);
  }

  deleteHospital(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
