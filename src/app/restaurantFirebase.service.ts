import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth"
import { Firestore, addDoc, collection } from "@angular/fire/firestore"
import { Router } from "@angular/router"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Observable, from } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class RestaurantFirebaseService{


  constructor(private _router: Router,private httpClient: HttpClient){}


  firebaseAuth = inject(Auth)


    async addRestaurant(restaurant_Name:String,
        restaurant_Logo:String,restaurant_Tags:String,
        restaurant_DeliveryFee:String,
        restaurant_DeliveryCities:String,
        restaurant_CookingTime:String,
        restaurant_Description:String
        ): Promise<void>
        {

    const fullUrl = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Restaurants/${this.firebaseAuth.currentUser?.uid}.json`
            const restaurantToCreate = {
                restaurant_Name: restaurant_Name,restaurantLogo: restaurant_Logo,restaurantTags:restaurant_Tags,
                delivery_Cities: restaurant_DeliveryCities,
                delivery_Fee: restaurant_DeliveryFee,
                cooking_Time: restaurant_CookingTime,
                restaurant_id : this.firebaseAuth.currentUser?.uid, // Restaurant gets same id as owner.
                restaurant_Description:restaurant_Description
            }
            await this.httpClient.patch(fullUrl,restaurantToCreate).subscribe(responseData => {
             })
    }






}
