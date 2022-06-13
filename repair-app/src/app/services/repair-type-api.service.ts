import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from './urlsApi';

@Injectable({
  providedIn: 'root'
})
export class RepairTypeApiService {

  constructor(private http: HttpClient) { }


  getListRepairTypes(): Observable<any[]>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + '/repairType')
  }
  

  getRepairTypeById(id: any): Observable<any>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + `/repairType/${id}`)
  }

  addRepairType(data: any): Observable<any>{
    return this.http.post<any>(UrlsApi.baseUrlRepairApi + '/rapairType', data)
  }

  updateRepairType(id: any, data: any): Observable<any>{
    return this.http.put<any>(UrlsApi.baseUrlRepairApi + `/repairType/${id}`, data)
  }

  deleteRepairType(id: any){
    return this.http.delete(UrlsApi.baseUrlRepairApi + `/repairType/${id}`)
  }
}
