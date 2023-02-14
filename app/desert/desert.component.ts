import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;
  cart:any;
  doj: any;
  doj1: any;
  doj2: any;

  constructor(private service:PackageService,public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" "};
    this.imgCollection = [
      {
        image: "assets/Images/sliders/dubai.jpg",
        thumbImage: "assets/Images/sliders/dubai.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/sliders/Rajsthan.jpeg",
        thumbImage: "assets/Images/sliders/Rajsthan.jpeg",
        title: '',
        alt: 'Image 3'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllDesert().subscribe((data: any) => {this.products = data;});
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
  explore2(product: any){
    this.recentExp2=product;
    jQuery('#cardModal2').modal('show');
  }
  Addtrips(product: any){
    this.cart={prodName:product.desertName , emailID:this.userservice.getEmail() , imgPath:product.desertPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.desertPrice), description:product.desertAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.desertName , emailID:this.userservice.getEmail() , imgPath:product.desertPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.desertPrice1), description:product.desertAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.desertName , emailID:this.userservice.getEmail() , imgPath:product.desertPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.desertPrice2), description:product.desertAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
}
