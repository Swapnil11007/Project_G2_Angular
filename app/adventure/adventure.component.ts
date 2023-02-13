import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;
@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp1: any;
  recentExp2: any;
  QTY: number;
  cart: any;
  doj: any;
  doj1: any;
  constructor(private service:PackageService, public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.QTY = 0;
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " };
    this.imgCollection = [
      {
        image: "assets/Images/adventure/slider1.jpg",
        thumbImage: "assets/Images/adventure/slider1.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/adventure/slider.jpg",
        thumbImage: "assets/Images/adventure/slider.jpg",
        title: '',
        alt: 'Image 3'
      } ,{
        image: "assets/Images/adventure/slider2.jpg",
        thumbImage: "assets/Images/adventure/slider2.jpg",
        title: '',
        alt: 'Image 2'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllAdventure().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    this.recentExp=product;
    jQuery('#cardModal').modal('show');
  }
  explore1(product: any){
    this.recentExp1=product;
    jQuery('#cardModal1').modal('show');
  }

  Addtrips(product: any){
    this.cart={prodName:product.adventureName , emailID:this.userservice.getEmail() , imgPath:product.adventurePath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.adventurePrice)};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.adventureName , emailID:this.userservice.getEmail() , imgPath:product.adventurePath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.adventurePrice1)};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
}
