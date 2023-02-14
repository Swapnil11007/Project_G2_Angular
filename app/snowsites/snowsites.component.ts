import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;
@Component({
  selector: 'app-snowsites',
  templateUrl: './snowsites.component.html',
  styleUrls: ['./snowsites.component.css']
})
export class SnowsitesComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;
  cart:any;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
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
        image: "assets/Images/snowsites/slider1.jpg",
        thumbImage: "assets/Images/snowsites/slider1.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/snowsites/slider.jpg",
        thumbImage: "assets/Images/snowsites/slider.jpg",
        title: '',
        alt: 'Image 3'
      } ,{
        image: "assets/Images/snowsites/slider2.jpg",
        thumbImage: "assets/Images/snowsites/slider2.jpg",
        title: '',
        alt: 'Image 2'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllSnowsites().subscribe((data: any) => {this.products = data;});
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
    this.cart={prodName:product.snowName , emailID:this.userservice.getEmail() , imgPath:product.snowPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.snowPrice), description:product.snowAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.snowName , emailID:this.userservice.getEmail() , imgPath:product.snowPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.snowPrice1), description:product.snowAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.snowName , emailID:this.userservice.getEmail() , imgPath:product.snowPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.snowPrice2), description:product.snowAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
}
