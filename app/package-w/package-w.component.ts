import { Component } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-w',
  templateUrl: './package-w.component.html',
  styleUrls: ['./package-w.component.css']
})
export class PackageWComponent {
  cards: any;
  products: any;

  public carouselPFlag:boolean=true;

  images=[
    {
      imageSrc:'assets/Images/HillStations/C1.jpg',
      imageAlt:'unsplash2'
    },
    {
      imageSrc:'assets/Images/HillStations/C2.jpg',
      imageAlt:'unsplash3'
    }
  ]

  constructor(private service:PackageService)    
  {
   
  }

  ngOnInit(): void {
    this.service.getAllPackageW().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    alert("Moved to next Page with detailed information related to trip!");
  }
}
