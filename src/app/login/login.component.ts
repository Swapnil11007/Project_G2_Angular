import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId:any;
  password:any

  constructor(){
    this.emailId='';
    this.password='';

  }


  ngOnInit(): void {
    
  }

  submitForm(loginForm:any){

    if(loginForm.emailId=='HR' && loginForm.password=='hr'){
      alert('login Success');
    }else{
      alert('login Failed');
    }

  }

}
