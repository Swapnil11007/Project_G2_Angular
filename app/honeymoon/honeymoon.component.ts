import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;

@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.css']
})
export class HoneymoonComponent implements OnInit{

  cards: any;
  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;
  total: any;
  cart:any;
  doj: any;
  doj1: any;
  doj2: any;

  constructor(public service:PackageService, public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" "};
    this.imgCollection = [
      {
        image: "assets/Images/sliders/honeymoon-slide2.jpg",
        thumbImage: "assets/Images/sliders/honeymoon-slide2.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/sliders/honeyslide1.jpg",
        thumbImage: "assets/Images/sliders/honeyslide1.jpg",
        title: '',
        alt: 'Image 3'
      }

  ];

  this.QTY = 0;

}
  // beachData: any[]=[]
  // openDialog(card:any) {
  //   console.log(card);
  //   this.beachData.push(card);
  //   this.dialog.open(DialogueComponent);
  // }
  

  ngOnInit(): void {
    this.service.getAllHoneyMoon().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    this.total = product.destinationPrice * this.QTY;
    this.recentExp=product;
    jQuery('#cardModal').modal('show');
  }
  explore1(product: any){
    this.recentExp1=product;
    jQuery('#cardModal1').modal('show');
  }
  explore2(product: any){
    this.recentExp2=product;
    jQuery('#cardModal2').modal('show');
  }
  Addtrips(product: any){
    this.cart={prodName:product.destinationName , emailID:this.userservice.getEmail() , imgPath:product.destinationPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.destinationPrice), description:product.destinationAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.destinationName , emailID:this.userservice.getEmail() , imgPath:product.destinationPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.destinationPrice1), description:product.destinationAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.destinationName , emailID:this.userservice.getEmail() , imgPath:product.destinationPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.destinationPrice2), description:product.destinationAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
}
