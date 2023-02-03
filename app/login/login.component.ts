import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId:any;
  password:any
  user:any;
  confirmPassword:any;
  constructor(private service:UserserviceService){
     this.user= {userId:'',userName:'',emailId:'',mobileNumber:'',password:''};
     
    
    // this.confirmPassword=this.confirmPassword;

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
  register(){
    jQuery('#myModal').modal('show');
  }

  registerUsers(){
    
    this.service.registerUser(this.user).subscribe((data:any)=>{console.log(data);});
    console.log(this.user);
    alert('User Registered');
  }

}
