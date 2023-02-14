import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';

declare var jQuery:  any;
@Component({
  selector: 'app-package-js',
  templateUrl: './package-js.component.html',
  styleUrls: ['./package-js.component.css']
})

export class PackageJSComponent implements OnInit {
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

  constructor(private service:PackageService , public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" "};
    this.imgCollection = [
      {
        image: "assets/Images/junglesafari/slider.jpg",
        thumbImage: "assets/Images/junglesafari/slider.jpg",
        alt: 'Image 1',
        title: ''
      }, {
        image: "assets/Images/junglesafari/slider2.jpg",
        thumbImage: "assets/Images/junglesafari/slider2.jpg",
        title: '',
        alt: 'Image 2'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllSafari().subscribe((data: any) => {this.products = data;});
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
    this.cart={prodName:product.safariName , emailID:this.userservice.getEmail() , imgPath:product.safariPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.safariPrice),description:product.safariAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.safariName , emailID:this.userservice.getEmail() , imgPath:product.safariPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.safariPrice1),description:product.safariAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.safariName , emailID:this.userservice.getEmail() , imgPath:product.safariPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.safariPrice2),description:product.safariAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
}