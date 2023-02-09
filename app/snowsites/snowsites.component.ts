import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
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
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];

  constructor(private service:PackageService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;
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
}
