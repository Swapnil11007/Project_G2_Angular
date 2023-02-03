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

  constructor(private service:PackageService)    
  {
   
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data: any) => {this.products = data;});
  }
  explore(product: any){
    alert("Moved to next Page with detailed information related to trip!");
  }
}
