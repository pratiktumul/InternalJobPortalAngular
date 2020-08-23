import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from './jobs';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  url1 = 'https://localhost:44325/api/JobOpening';
  url2 = 'https://localhost:44325/api/JobOpening/search';
  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.url1);
  }
  getJobsBySearch(title: string, location: string): Observable<Jobs[]> {
    let url = `https://localhost:44325/api/JobOpening/search?title=${title}&location=${location}`;
    return this.http.get<Jobs[]>(url);
  }
  roleMatch(allowedRoles: any[]): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('role'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}