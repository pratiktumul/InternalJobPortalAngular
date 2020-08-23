import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  uri = 'https://localhost:44325/api/JobOpening';
  constructor(private http:HttpClient) { }

  getJobById(id:number):Observable<any>{
    return this.http.get<any>(this.uri+'/'+id);
  }
}
