import { HttpClient } from '@angular/common/http';
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
  user1:any;
  confirmPassword:any;
   
  private baseUrl = 'http://localhost:8080/api/auth/google';

  constructor(private service:UserserviceService,private http: HttpClient){
     this.user= {userId:'',userName:'',emailId:'',mobileNumber:'',password:''};
     
    
    this.confirmPassword=this.confirmPassword;
    this.user1={};

  }

  ngOnInit(): void {
    
  }

  async submitForm(loginForm: any) {

    console.log(loginForm);

    await this.service.getUser(loginForm).then((data: any) => {this.user1 = data; console.log(data);});
    
    if (this.user1 != null) {
      jQuery('#successModal').modal('show');
      // alert('Successfully LoggedIn...');
       
    } else {
      jQuery('#failModal').modal('show');
      // alert('Invalid Credentials!!!');
      
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
    params.append('client_id', 'YOUR_CLIENT_ID');
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


  
  
