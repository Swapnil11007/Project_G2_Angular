import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
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
  total: any;

  constructor(public service:PackageService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.recentExp2={};
    this.imgCollection = [
      {
        image: "assets/Images/sliders/Himachal.jpg",
        thumbImage: "assets/Images/sliders/Himachal.jpg",
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
    this.service.getAllHillStation().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    this.total = product.productPrice * this.QTY;
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
