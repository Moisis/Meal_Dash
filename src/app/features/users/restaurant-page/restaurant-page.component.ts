import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantFirebaseService} from "../../../restaurantFirebase.service";

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit {

 name = 'RestaurantPageComponent';
  productId?: string ;
  productDetails: any;

  constructor( private route: ActivatedRoute ,private productService: RestaurantFirebaseService ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productId = params['id'];
     //this.getProductDetails();
    });
  }


    // getProductDetails() {
    //   this.productService.getProductById(this.productId).subscribe(data => {
    //     this.productDetails = data;
    //   });
    // }



  items = [
    ["RestaurantName", "CuisineTags", "Delivery Fee", "Cooking Time"],
    ["title1", "description1", "free", "100"],
    ["title2", "desc2", "10", "150"],
    ["title3", "desc3", "20", "200"],
    ["title4", "desc4", "30", "250"],]

}
