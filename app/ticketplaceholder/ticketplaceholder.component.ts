import { Component } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-ticketplaceholder',
  templateUrl: './ticketplaceholder.component.html',
  styleUrls: ['./ticketplaceholder.component.css']
})
export class TicketplaceholderComponent {

  trips: any;
  visible:any;
  cart:any;
  doj: any;
  QTY: any;
  mailID:any;

  constructor(protected service: PackageService, private userService: UserserviceService){
    this.service.getPlaceHolder().subscribe((data: any) => {
      this.trips = data;
      console.log(data);
      this.mailID=this.userService.getEmail()
    });
    this.visible=false;
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " };
  }
  
  ngOnInit(): void {
    // this.service.getTicketByEmailId(this.userService.getEmail()).subscribe((data: any) => {
    //   this.trips = data;
    //   console.log(data);
    // });
  }
  deletePlaceHolder(product:any){
    this.service.deletePlaceHolder(product.emailID , product.prodName).subscribe((data:any) => {console.log('Trip Deleted');});
    const i = this.trips.findIndex((element: any) => {
      return product.id === element.id;
    });
    this.trips.splice(i, 1);
  }
  buyNow(product:any){
    this.cart={prodName:product.prodName , emailID:this.userService.getEmail() , imgPath:product.imgPath ,travelDate:product.travelDate, quantity:product.quantity, totalAmount:product.totalAmount*0.9};
    this.service.setCheckOut(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    this.service.deletePlaceHolder(product.emailID , product.prodName).subscribe((data:any) => {console.log('Trip Deleted');});
    this.service.deleteCheckOut(product.emailID , product.prodName).subscribe((data:any) => {console.log('Trip Deleted');});
    const i = this.trips.findIndex((element: any) => {
      return product.id === element.id;
    });
    this.trips.splice(i, 1);
  }
}
