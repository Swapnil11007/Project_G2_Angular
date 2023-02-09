import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display_block: any;
  user: any;
  loginStatus: any;
  retreivedData: any;

  constructor(private router: Router, protected service: UserserviceService){
  }

  ngOnInit(): void {
    
    //this.user = this.service.User;
    this.service.getUser1().subscribe((data1: any) => {
      this.user = data1;
      console.log("data1 : ")
      console.log(data1);
    });

    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
      
      console.log(data);
    });
    //this.retreivedData = localStorage.getItem('loggedUser');
    //this.user = JSON.parse(this.retreivedData);
    //this.user = this.user.userName;
  }

  profile(){
    this.router.navigate(['trips']);
  }

}
