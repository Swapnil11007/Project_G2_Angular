import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

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

  constructor(private service:PackageService)    
  {
    this.imgCollection = [
      {
        image: "assets/Images/junglesafari/slider1.jpg",
        thumbImage: "assets/Images/junglesafari/slider1.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/junglesafari/slider.jpg",
        thumbImage: "assets/Images/junglesafari/slider.jpg",
        title: '',
        alt: 'Image 3'
      } ,{
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
    alert("Explore Method is not yet added!");
  }
}