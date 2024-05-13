import { HttpClient, } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-restaurant-list',
  templateUrl: './user-restaurant-list.component.html',
  styleUrl: './user-restaurant-list.component.css'
})
export class UserRestaurantListComponent {

  constructor(private httpClient: HttpClient){}


  restaurantCollection:any = {};
  ngOnInit():void{
     this.restaurantCollection =  this.getRestaurants();
  }

  fullUrl = "https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Restaurants.json"


  async getRestaurants(){

    await this.httpClient.get(this.fullUrl).subscribe(responseData => {
      return responseData
    })
  }



  items = [
    ["RestaurantName", "CuisineTags", "Delivery Fee", "Cooking Time"],
    ["title1", "description1", "free", "100"],
  ["title2", "desc2", "10", "150"],
  ["title3", "desc3", "20", "200"],
  ["title4", "desc4", "30", "250"],]
}
