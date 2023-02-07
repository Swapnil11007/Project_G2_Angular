import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {
  cards: any;

  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];

  constructor(private service:PackageService)    
  {
    this.imgCollection = [
      {
        image: "assets/Images/sliders/dubai.jpg",
        thumbImage: "assets/Images/sliders/dubai.jpg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/sliders/Rajsthan.jpeg",
        thumbImage: "assets/Images/sliders/Rajsthan.jpeg",
        title: '',
        alt: 'Image 3'
      }
  ];
  }

  ngOnInit(): void {
    this.service.getAllDesert().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    alert("Explore Method is not yet added!");
  }
}
