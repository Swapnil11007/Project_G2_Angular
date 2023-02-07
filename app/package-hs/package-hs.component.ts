import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-hs',
  templateUrl: './package-hs.component.html',
  styleUrls: ['./package-hs.component.css']
})
export class PackageHSComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;

  images=[
    {

      imageSrc:'assets/Images/hillstation/slider.jpg',
      imageAlt:'unsplash2'
    },
    {
      imageSrc:'assets/Images/hillstation/slider.jpg',

      imageAlt:'unsplash3'
    },
    {
      imageSrc:'assets/Images/hillstation/slider.jpg',
      imageAlt:'unsplash1'
    }
  ]

  constructor(private service:PackageService)    
  {
   
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    alert("Moved to next Page with detailed information related to trip!");
  }
}
