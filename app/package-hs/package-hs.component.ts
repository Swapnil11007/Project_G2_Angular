import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;

@Component({
  selector: 'app-package-hs',
  templateUrl: './package-hs.component.html',
  styleUrls: ['./package-hs.component.css']
})
export class PackageHSComponent implements OnInit {
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
  user: any;

  constructor(private service:PackageService , public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" "};
    this.imgCollection = [
      {
        image: "assets/Images/sliders/Amarnath.jpg",
        thumbImage: "assets/Images/sliders/Amarnath.jpg",
        alt: 'Image 1',
        title: ''
      }, {
        image: "assets/Images/sliders/Himachal.jpg",
        thumbImage: "assets/Images/sliders/Himachal.jpg",
        title: '',
        alt: 'Image 2'
      }, {
        image: "assets/Images/sliders/Rajsthan.jpeg",
        thumbImage: "assets/Images/sliders/Rajsthan.jpeg",
        title: '',
        alt: 'Image 3'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllHillStation().subscribe((data: any) => {this.products = data;});
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
    this.cart={prodName:product.productName , emailID:this.userservice.getEmail() , imgPath:product.productPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.productPrice), description:product.productAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.productName , emailID:this.userservice.getEmail() , imgPath:product.productPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.productPrice1), description:product.productAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.productName , emailID:this.userservice.getEmail() , imgPath:product.productPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.productPrice2), description:product.productAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
}