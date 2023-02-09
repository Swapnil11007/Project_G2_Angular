import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
declare var jQuery:  any;
@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent implements OnInit {
  cards: any;
  recentExp:any;
  products: any;
  public carouselPFlag:boolean=true;
  imgCollection: { image: string; thumbImage: string; alt: string; title: string; }[];

  constructor(private service:PackageService)    
  {
    this.imgCollection = [
      {
        image: "assets/Images/sliders/beach.jpeg",
        thumbImage: "assets/Images/sliders/beach.jpeg",
        alt: 'Image 1',
        title: ''
      } ,{
        image: "assets/Images/sliders/maldives.jpg",
        thumbImage: "assets/Images/sliders/maldives.jpg",
        title: '',
        alt: 'Image 3'
      }
  ];
  this.recentExp={};
  }

  ngOnInit(): void {
    this.service.getAllBeach().subscribe((data: any) => {this.products = data;});
  }
  carouselHome(ch:boolean){
    this.carouselPFlag=ch;
  }
  explore(product: any){
    this.recentExp=product;
    jQuery('#cardModal').modal('show');
    // alert("Explore Method is not yet added!");

  }
}
