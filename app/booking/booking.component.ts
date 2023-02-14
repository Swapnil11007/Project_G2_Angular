import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  trips: any;
  cart:any;
  constructor(protected service: PackageService, private userService: UserserviceService){
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" " };
  }

  ngOnInit(): void {
    this.service.getCheckOutByemailId(this.userService.getEmail()).subscribe((data: any) => {
      this.trips = data;
      console.log(data);
    });
  }

  placeTrip(product:any){

    this.cart={prodName:product.prodName , emailID:this.userService.getEmail() , imgPath:product.imgPath ,travelDate:product.travelDate, quantity:product.quantity, totalAmount:product.totalAmount ,description:product.description}; 
    this.service.setPlaceHolder(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(product.prodName + " Opted for Cancellation");
  }
  print(t:any){}
}