import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private API_URL = 'https://6565819aeb8bb4b70ef1aab9.mockapi.io/';

  constructor(private http: HttpClient) { }
  
  public getAll(route: string) {
    
    return this.http.get(this.API_URL + route);
  }}
