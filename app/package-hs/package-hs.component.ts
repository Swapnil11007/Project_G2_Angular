import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
declare var jQuery: any;

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
    this.service.getAllProducts().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    alert("Moved to next Page with detailed information related to trip!");
  }
  model(card:any){
    
    jQuery('#exampleModalLabel').modal('show');
  }
}


