import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-restaurant-list',
  templateUrl: './user-restaurant-list.component.html',
  styleUrl: './user-restaurant-list.component.css',
})
export class UserRestaurantListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  fullUrl =
    'https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Restaurants.json';
  restaurantCollection: any = {};
  items: any = [];
  searchText: any;
  filterByPasta: any;
  filterByBurgers: any;
  async ngOnInit(): Promise<void> {
    try {
     await this.httpClient
        .get(this.fullUrl)
        .subscribe((responseData) => {
          this.restaurantCollection = responseData;
          // Process and add restaurant details to items array
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              const restaurant = this.restaurantCollection[key];
              this.items.push([
                restaurant.restaurant_Name,
                restaurant.restaurantTags,
                restaurant.delivery_Fee + ' EGP', // Handle potential missing property
                restaurant.cooking_Time + ' Minute(s)', // Handle potential missing property,
                restaurant.restaurant_id
              ]);
            }
          }
        });
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }
  onFilterByPastaChange() {
    if (this.filterByPasta) {
      this.items = [];
      for (const key in this.restaurantCollection) {
        if (this.restaurantCollection.hasOwnProperty(key)) {
          const restaurant = this.restaurantCollection[key];
          if (restaurant.restaurantTags.includes('Pasta')) {
            this.items.push([
              restaurant.restaurant_Name,
              restaurant.restaurantTags,
              restaurant.delivery_Fee + ' EGP',
              restaurant.cooking_Time + ' Minutes',
              restaurant.restaurant_id

            ]);
          }
        }
      }
    } else {
      this.items = [];
      for (const key in this.restaurantCollection) {
        if (this.restaurantCollection.hasOwnProperty(key)) {
          const restaurant = this.restaurantCollection[key];
          this.items.push([
            restaurant.restaurant_Name,
            restaurant.restaurantTags,
            restaurant.delivery_Fee + ' EGP',
            restaurant.cooking_Time + ' Minutes',
            restaurant.restaurant_id

          ]);
        }
      }
    }
  }
  onFilterByBurgersChange(){
    if (this.filterByBurgers) {
      this.items = [];
      for (const key in this.restaurantCollection) {
        if (this.restaurantCollection.hasOwnProperty(key)) {
          const restaurant = this.restaurantCollection[key];
          if (restaurant.restaurantTags.includes('Burger')) {
            this.items.push([
              restaurant.restaurant_Name,
              restaurant.restaurantTags,
              restaurant.delivery_Fee + ' EGP',
              restaurant.cooking_Time + ' Minutes',
              restaurant.restaurant_id

            ]);
          }
        }
      }
    } else {
      this.items = [];
      for (const key in this.restaurantCollection) {
        if (this.restaurantCollection.hasOwnProperty(key)) {
          const restaurant = this.restaurantCollection[key];
          this.items.push([
            restaurant.restaurant_Name,
            restaurant.restaurantTags,
            restaurant.delivery_Fee + ' EGP',
            restaurant.cooking_Time + ' Minutes',
            restaurant.restaurant_id

          ]);
        }
      }
    }
  }
}
