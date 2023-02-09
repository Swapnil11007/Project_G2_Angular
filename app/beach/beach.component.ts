import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
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

  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;
  total: any;

  constructor(public service:PackageService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;

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
    this.service.getAllBeach().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    this.recentExp=product;
    jQuery('#cardModal').modal('show');
    this.total = product.beachPrice * this.QTY;
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

}

