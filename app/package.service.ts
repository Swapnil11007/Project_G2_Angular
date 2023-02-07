import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient: HttpClient) { 
    
  }
  getAllProducts(): any {
    return this.httpClient.get('/showAllProducts');
  }


  getAllPiligrimage(): any {
    return this.httpClient.get('/showAllPiligrimages');
  }
  getAllDesert(): any {
    return this.httpClient.get('/showAllDesert');
  }
  getAllBeach(): any {
    return this.httpClient.get('/showAllBeach');
  }
  getAllSafari(): any {
    return this.httpClient.get('/showAllSafari');
  }
  getAllSnowsites(): any {
    return this.httpClient.get('/showAllSnowsites');
  }
  getAllAdventure(): any {
    return this.httpClient.get('/showAllAdventure');
  }

  getAllPackageW():any{
    return this.httpClient.get('/showAllPackageW');
  }

  getAllHoneyMoon(): any {
    return this.httpClient.get('/showAllHoneyMoon');
  }

}
