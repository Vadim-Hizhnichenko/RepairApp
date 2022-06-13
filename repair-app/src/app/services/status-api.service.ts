import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UrlsApi } from './urlsApi';

@Injectable({
  providedIn: 'root'
})
export class StatusApiService {

  constructor(private http: HttpClient) { }

  getStatusList(): Observable<any[]>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + '/status')
  }

  getStatusById(id: any): Observable<any>{
    return this.http.get<any>(UrlsApi.baseUrlRepairApi + `/status/${id}`)
  }

  addStatus(data: any): Observable<any>{
    return this.http.post<any>(UrlsApi.baseUrlRepairApi + '/status', data)
  }

  updateStatus(id: any, data: any): Observable<any>{
    return this.http.put<any>(UrlsApi.baseUrlRepairApi + `/status/${id}`, data)
  }

  deleteStatus(id: any){
    return this.http.delete(UrlsApi.baseUrlRepairApi + `/status/${id}`)
  }

}
