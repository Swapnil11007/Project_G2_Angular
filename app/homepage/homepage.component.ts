
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  cards: any;

  tours: any;
  imgCollection: ({ image: string; thumbImage: string; alt: string; title: string; } | { image: string; title: string; alt: string; thumbImage?: undefined; })[];

  constructor(private router:Router)    
   {

    this.tours = [
      {
        name: 'HillStation',
        description: 'Hill station is a go-to destination all through the year for backpackers, Adventures and Nature lovers. And we have best hillstation packages in Incredible india',
        imgPath: "assets/Images/homepage/hillsstation.jpg",
        route:"PackageHS"
      },
      {
        name: 'Beach',
        description: 'Enjoy the best blue beaches of India',
        imgPath: "assets/Images/homepage/beach.jpg",
        route:"beach"
      },
      {
        name: 'Desert',
        description: 'Best tour to enjoy the desert safaries and cool breezes and camping ',
        imgPath: "assets/Images/homepage/desert.jpg",
        route:"desert"
      },
      {
        name: 'Jungle-Safari',
        description: 'Explore Indias and Africas best Forest Tourism ',
        imgPath: "assets/Images/homepage/junglesafari.jpg",
        route:"PackageJS"
      },
      {
        name: 'Piligrimage',
        description: 'All the devotional tours are covered with special darshan',
        imgPath: "assets/Images/homepage/piligrimage.jpg",
        route:"piligrimage"
      },
      {
        name: 'SnowSites',
        description: 'Enjoy winter Holidays at the beatiful Snowfall locations',
        imgPath: "assets/Images/homepage/snowfall.jpg",
        route:"snow"
      },
      {
        name: 'Honeymoon',
        description: 'Best places with special packages for the couples ',
        imgPath: "assets/Images/homepage/honeymoon.jpg",
        route:"Honeymoon"
      },
      {
        name: 'WaterFall',
        description: 'Enjoy the camping stays near the waterfall ',
        imgPath: "assets/Images/homepage/waterfalls.jpg",
        route:"PackageW"
      },
      {
        name: 'Adventure',
        description: 'Best and thrill making adventure locations with Dope making activities',
        imgPath: "assets/Images/homepage/adventure.jpg",

        route:"adventure"
      }
      
    ];

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
      }, {
        image: "assets/Images/sliders/dubai.jpg",
        thumbImage: "assets/Images/sliders/dubai.jpg",
        title: '',
        alt: 'Image 4'
      }
  ];
  }

  ngOnInit(): void {
    
  }
  navigate(card:any){
    if(card == card.name){
      this.navigate
    }
  }
}
