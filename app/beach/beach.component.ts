import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { UserserviceService } from '../userservice.service';
declare var jQuery:  any;

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent implements OnInit {
 
  cards: any;
  products: any;
  public carouselPFlag:boolean=true;
  cart: any;

  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;
  total: any;
  doj:any;
  user: any;
  doj1: any;
  doj2: any;
  mydate: any;
  constructor(public service:PackageService , public userservice:UserserviceService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.cart={prodName:" " , emailID:" " , imgPath:" " ,travelDate:" ", quantity:" ", totalAmount:" " ,description:" "};

    this.QTY = 0;
    this.mydate=new Date();
    console.log(this.mydate);

    this.imgCollection = [
      {
        image: "assets/Images/sliders/beach.jpeg",
        thumbImage: "assets/Images/sliders/beach.jpeg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/sliders/maldives.jpg",
        thumbImage: "assets/Images/sliders/maldives.jpg",
        title: '',
        alt: 'Image 3'
      }

    ]; 

  }


  ngOnInit(): void {
    this.userservice.getUser1().subscribe((data1: any) => {
      this.user = data1;
      console.log("data1 inside beach : ")
      console.log(data1);
    });
    this.service.getAllBeach().subscribe((data: any) => {this.products = data;});

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
    this.cart={prodName:product.beachName , emailID:this.userservice.getEmail() , imgPath:product.beachPath ,travelDate:this.doj, quantity:this.QTY, totalAmount:(this.QTY*product.beachPrice), description:product.beachAbout};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }
  Addtrips1(product: any){
    this.cart={prodName:product.beachName , emailID:this.userservice.getEmail() , imgPath:product.beachPath ,travelDate:this.doj1, quantity:this.QTY, totalAmount:(this.QTY*product.beachPrice1), description:product.beachAbout1};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
    
  }
  Addtrips2(product: any){
    this.cart={prodName:product.beachName , emailID:this.userservice.getEmail() , imgPath:product.beachPath ,travelDate:this.doj2, quantity:this.QTY, totalAmount:(this.QTY*product.beachPrice2), description:product.beachAbout2};
    this.service.setDashboard(this.cart).subscribe((data:any)=>{console.log('trip added');});
    alert(this.cart.prodName+" Added to Cart");
  }

  addTrip(recentExp:any){
    alert('Your trips are added go to my trip to see');
    console.log(recentExp);
  }

}

