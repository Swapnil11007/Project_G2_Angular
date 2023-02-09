import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  emailId:any;
  password:any
  display_block: any;
  OTP: any;
  
  constructor(private router: Router, private service: UserserviceService){
    this.emailId='';
    this.password='';
    this.OTP= -1;
  }


  ngOnInit(): void {
    
  }

  submitForm(emailId:any){
    console.log(emailId);

    this.service.sendMail(emailId.emailId).subscribe((data : any) => {
      console.log(data);
      if(data.userId == -1){
        this.display_block = document.getElementById("send_otp");
        this.display_block.style.display = "block";
        this.display_block = document.getElementById("validate_otp");
        this.display_block.style.display = "none";
        alert("email not registered")
      }
      else{
        this.emailId = emailId.emailId;
        this.display_block = document.getElementById("send_otp");
        this.display_block.style.display = "none";
        this.display_block = document.getElementById("validate_otp");
        this.display_block.style.display = "block";
      }
    });

    
    // if(loginForm.emailId=='HR' && loginForm.password=='HR'){
    //   alert('login Success');
    // }else{
    //   alert('login Failed');
    // }

  }

  getAndValidateOTP(validateOTPForm: any) {
    this.service.getOTP().subscribe((data : any) => {
      this.OTP = data;
      console.log(data);
      this.validateOTP(validateOTPForm);
    });
  }
  
  validateOTP(validateOTPForm: any){
  
    console.log("Otp given by System : " + this.OTP.value);
    console.log("OTP input given : " + validateOTPForm.OTP);
    if(validateOTPForm.OTP == this.OTP){
      alert('Correct OTP');
      this.display_block = document.getElementById("validate_otp");
      this.display_block.style.display = "none";
       this.display_block = document.getElementById("reset_password");
       this.display_block.style.display = "block";
    }else{
      alert('Incorrect OTp');
    }
  }

  show_forgot_password_page(){
    this.display_block = document.getElementById("validate_otp");
    this.display_block.style.display = "none";
     this.display_block = document.getElementById("send_otp");
     this.display_block.style.display = "block";
  }

  resetPassword(resetPasswordForm: any){
    // alert(resetPasswordForm.password1);
    // alert(resetPasswordForm.password2);
    if(resetPasswordForm.password1 == resetPasswordForm.password2){

      console.log(this.emailId, resetPasswordForm.password1);

      this.service.updatePassword(this.emailId, resetPasswordForm.password1);
      alert('Reset Success');
      this.router.navigate(['../login']);
    }else{
      alert('Both Passwords not Machting');
    }
  }

  otp(){
    alert('otp send');
     this.display_block = document.getElementById("send_otp");
    this.display_block.style.display = "none";
     this.display_block = document.getElementById("validate_otp");
     this.display_block.style.display = "block";
  }
}
