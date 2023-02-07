import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-piligrimage',
  templateUrl: './piligrimage.component.html',
  styleUrls: ['./piligrimage.component.css']
})
export class PiligrimageComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;

  images=[
    {
      imageSrc:'assets/Images/C1.jpg',
      imageAlt:'unsplash2'
    },
    {
      imageSrc:'assets/Images/C2.jpg',
      imageAlt:'unsplash3'
    }
  ]
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];

  constructor(private service:PackageService)    
  {
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
    alert("Explore Method is not yet added!");
  }
}
