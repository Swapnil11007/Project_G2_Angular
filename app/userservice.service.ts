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

  getUser(user: any) {
    return this.httpClient.get("/getUser/" + user.emailId + "/" + user.password).toPromise();
  }

  sendMail(emailId:any) :any{
    return this.httpClient.get('/sendMail/' + emailId);
  }

  getOTP(): any{
    return this.httpClient.get('/getOTP');
  }

  updatePassword(emailId: any, password: any): any{
   this.httpClient.put('/updatePassword/' + emailId + '/' + password,null).toPromise();
  }

}
