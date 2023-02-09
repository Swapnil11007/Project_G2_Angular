import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
declare var jQuery:  any;
@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];
  recentExp: any;
  recentExp1: any;
  recentExp2: any;
  QTY: number;

  constructor(private service:PackageService)    
  {
    this.recentExp={};
    this.recentExp1={};
    this.QTY = 0;
    this.imgCollection = [
      {
        image: "assets/Images/adventure/slider1.jpg",
        thumbImage: "assets/Images/adventure/slider1.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/adventure/slider.jpg",
        thumbImage: "assets/Images/adventure/slider.jpg",
        title: '',
        alt: 'Image 3'
      } ,{
        image: "assets/Images/adventure/slider2.jpg",
        thumbImage: "assets/Images/adventure/slider2.jpg",
        title: '',
        alt: 'Image 2'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllAdventure().subscribe((data: any) => {this.products = data;});
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
}
