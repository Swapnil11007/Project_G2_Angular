import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }

  registerUser(user:any) :any{
    return this.httpClient.post('/registerUser' , user);
  }
}
