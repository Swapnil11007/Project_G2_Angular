import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router ,private service: UserserviceService){}

  ngOnInit(): void {
    alert("User Logout");
    this.service.setUserLoggedOut();
    this.router.navigate(['']);
  }
}
