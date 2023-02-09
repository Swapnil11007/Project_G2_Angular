import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
declare var jQuery:  any;

@Component({
  selector: 'app-piligrimage',
  templateUrl: './piligrimage.component.html',
  styleUrls: ['./piligrimage.component.css']
})
export class PiligrimageComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp2: any;
  recentExp1: any;
  QTY: any;

  constructor(private service:PackageService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.QTY = 0;
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
    this.service.getAllPiligrimage().subscribe((data: any) => {this.products = data;});
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
