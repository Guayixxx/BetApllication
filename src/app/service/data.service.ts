import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = '/assets/data/data.json';

  constructor(private http: HttpClient) { }

  getBets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
