import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  user1:any;
  confirmPassword:any;
   
  private baseUrl = 'http://localhost:8080/api/auth/google';

  constructor(private service:UserserviceService, private http: HttpClient, private router: Router ){
     this.user= {userId:'',userName:'',emailId:'',mobileNumber:'',password:''};
     
    
    this.confirmPassword=this.confirmPassword;
    this.user1={};

  }

  ngOnInit(): void {
    
  }

  async submitForm(loginForm: any) {

    console.log(loginForm);

    await this.service.getUser(loginForm).then((data: any) => {this.user1 = data; console.log(data);});
    
    if (this.user1.userId == -1 ) {
      jQuery('#failModal').modal('show');
      // alert('Invalid Credentials!!!');
      
       
    } else {
      jQuery('#successModal').modal('show');
      // alert('Successfully LoggedIn...');
      this.router.navigate(["home"]);
    }
  }
 
  register(){
    jQuery('#myModal').modal('show');
  }

  registerUsers(){
     
    if(this.confirmPassword==this.user.password){
    this.service.registerUser(this.user).subscribe((data:any)=>{console.log(data);});
    jQuery('#regModal').modal('show');
    }else{
      jQuery('#regfailModal').modal('show');
      alert('password should be same')
    }
    
  }

  loginWithGoogle() {
    const params = new URLSearchParams();
    params.append('client_id', '583967187640-gulnhhn6l9v6td3he9vntnc6g5psqoau.apps.googleusercontent.com');
    params.append('redirect_uri', 'http://localhost:4200/callback');
    params.append('scope', 'email profile');
    params.append('response_type', 'code');
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  getAccessToken(code: string) {
    return this.http.post(`${this.baseUrl}/token`, { code })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

}


  
  
