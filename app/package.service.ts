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
  setDashboard(cart:any): any {
    // alert(cart.prodName);
    return this.httpClient.post('/registerDashboard' ,cart);
  }
  setCheckOut(cart:any):any {
    return this.httpClient.post('/registerCheckout' , cart);
  }
  setPlaceHolder(cart:any):any{
    return this.httpClient.post('/registerPlaceHolder' ,cart);
  }
  getPlaceHolder():any{
    return this.httpClient.get('/showPlaceHolder');
  }
  deleteTrip(email:any , prodName:any){
    return this.httpClient.delete('/deleteTrip/' + email +"/" + prodName);
  }
  deleteCheckOut(email:any,prodName:any){
    return this.httpClient.delete('/deleteCheckOut/' + email + "/" +prodName);
  }
  deletePlaceHolder(email:any,prodName:any){
    return this.httpClient.delete('/deletePlaceHolder/'+ email + "/" +prodName);
  }
  getTripByEmailId(email:any): any {
    return this.httpClient.get('/getTripByEmailId/' + email);
  }
  getCheckOutByemailId(email:any):any{
    return this.httpClient.get('/getCheckOutByEmailId/' + email);
  }
  getTicketByEmailId(email:any):any{
    return this.httpClient.get('/getTicketByEmailId/'+email);
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

  getAllHillStation():any {
    return this.httpClient.get('/showAllProducts');
  }

  getAllPackageW():any{
    return this.httpClient.get('/showAllPackageW');
  }

  getAllHoneyMoon(): any {
    return this.httpClient.get('/showAllHoneyMoon');
  }

}
