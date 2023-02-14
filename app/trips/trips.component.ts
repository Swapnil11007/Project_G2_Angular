import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit{

  trips: any;
  cart:any;
  constructor(protected service: PackageService, private userService: UserserviceService){
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " };
  }

  ngOnInit(): void {
    this.service.getTripByEmailId(this.userService.getEmail()).subscribe((data: any) => {
      this.trips = data;
      console.log(data);
    });
  }
  deleteTrip(t:any){

    console.log(t);
    this.service.deleteTrip(t.emailID , t.prodName).subscribe((data:any) => {console.log('Trip Deleted');});
    const i = this.trips.findIndex((element: any) => {
      return t.id === element.id;
    });
    this.trips.splice(i, 1);
  }
  checkout(product:any){
    
   this.cart={prodName:product.prodName , emailID:this.userService.getEmail() , imgPath:product.imgPath ,travelDate:product.travelDate, quantity:product.quantity, totalAmount:product.totalAmount}; 
   this.service.setCheckOut(this.cart).subscribe((data:any)=>{console.log('trip added');});
   this.service.deleteTrip(product.emailID , product.prodName).subscribe((data:any) => {console.log('Trip Deleted');});
    const i = this.trips.findIndex((element: any) => {
      return product.id === element.id;
    });
    this.trips.splice(i, 1);
  }

}
