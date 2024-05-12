import { Injectable, inject } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth"
import { Firestore, addDoc, collection } from "@angular/fire/firestore"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Observable, from } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class RestaurantFirebaseService{

    firestore = inject(Firestore)
    restaurantsCollection = collection(this.firestore,'Restaurants')
    

    addRestaurant(restaurant_Name:String,
        restaurant_Logo:String,restaurant_Tags:String,
        restaurant_DeliveryFee:String,
        restaurant_DeliveryCities :String,
        restaurant_CookingTime:String,
        ): Observable<String>{
        
            const restaurantToCreate = {
                restaurantName: restaurant_Name,restaurantLogo: restaurant_Logo,restaurantTags:restaurant_Tags,deliveryCities: restaurant_DeliveryCities ,deliveryFee: restaurant_DeliveryFee,cookingTime: restaurant_CookingTime,
            }

            const promise = addDoc(this.restaurantsCollection,restaurantToCreate).then(
                (response) => response.id
            );
            return from(promise); 


    }



    


}