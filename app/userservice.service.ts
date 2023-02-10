import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  isUserLogged : boolean;
  loginStatus: Subject<any>;

  display_block: any;
  User: any;
  User1: Subject<any>;

  constructor(private httpClient:HttpClient) { 
    this.isUserLogged = false;
    this.loginStatus = new Subject();
    this.User1 = new Subject();
  }

  // UserAuthService


   setUserLoggedIn(){
    this.isUserLogged = true;
    this.loginStatus.next(this.isUserLogged);
    this.User1.next(this.User);
    console.log("user1" );
    console.log(this.User1 );
   }

   setUserLoggedOut(){
    this.isUserLogged = false;
    this.loginStatus.next(this.isUserLogged);
    //this.User1.next(this.User);
   }

   getUserLogged(){
    return this.isUserLogged;
   }

   getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUser1(user: any){
    this.User = user;
  }

  getUser1(): any{
    return this.User1.asObservable();
  }

  // UserAuthService


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
