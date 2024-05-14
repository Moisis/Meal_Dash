import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantFirebaseService} from "../../../restaurantFirebase.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit {

 name = 'RestaurantPageComponent';
  restaurantID?: string ;

  menuCollection:any
  constructor( private _activatedRoute: ActivatedRoute ,private productService: RestaurantFirebaseService,private httpClient: HttpClient ) {}

  restaurantDetails:any
  items: any = [];


  ngOnInit(): void {






    
    this.restaurantID = this._activatedRoute.snapshot.paramMap.get('id') || '';


    const restaurantURL = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Restaurants/${this.restaurantID}.json`

    this.httpClient.get(restaurantURL).subscribe((responseData) => {
      this.restaurantDetails = responseData;
    })



    const menuURL = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Menus/${this.restaurantID}.json`;
     this.httpClient
    .get(menuURL)
    .subscribe((responseData) => {
      this.menuCollection = responseData;
      for (const key in responseData)
        {
          const menuItem = this.menuCollection[key];

          this.items.push([
            menuItem.itemName,
            menuItem.itemPrice,
            menuItem.itemDescription,
            menuItem.itemTag,
            menuItem.itemImage
          ]);

        }
    })
     //this.getProductDetails();
    };
  }


    // getProductDetails() {
    //   this.productService.getProductById(this.productId).subscribe(data => {
    //     this.productDetails = data;
    //   });
    // }


