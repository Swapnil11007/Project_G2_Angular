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
  getAllPackageW():any{
    return this.httpClient.get('/showAllPackageW');
  }
  getAllSafari(): any {
    return this.httpClient.get('/showAllSafari');
  }
}
