import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from './urlsApi';

@Injectable({
  providedIn: 'root'
})
export class RepairApiService {

  

  constructor(private http: HttpClient) { }

  getListRepair(): Observable<any[]>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + '/repair')
  }

  getRepairById(id: any): Observable<any>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + `/repair/${id}`)
  }

  addRepair(data: any): Observable<any>{
    return this.http.post<any>(UrlsApi.baseUrlRepairApi + '/repair', data)
  }

  updateRepair(id: any, data: any): Observable<any>{
    return this.http.put<any>(UrlsApi.baseUrlRepairApi + `/repair/${id}`, data)
  }

  deleteRepair(id: any){
    return this.http.delete(UrlsApi.baseUrlRepairApi + `/repair/${id}`)
  }

  


}
