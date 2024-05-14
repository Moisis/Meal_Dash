import { Injectable, inject, signal } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from "@angular/fire/auth"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { Observable, from } from "rxjs"
import { UserInterface } from "./user.interface"
import { DocumentData, Firestore, addDoc, collection, doc, getDoc, setDoc } from "@angular/fire/firestore"
import { HttpClient } from "@angular/common/http"


@Injectable({
    providedIn: 'root'
})

export class AuthService{



    constructor(private httpClient: HttpClient){}
    firebaseAuth = inject(Auth)
    firestore = inject(Firestore)
    usersCollection = collection(this.firestore,'Users')
    loggedinUser = user(this.firebaseAuth) // Null if user is not logged in - Logged In : User Data

    // Since we don't want all of the user's data, We can take ONLY what we need in the following
    // variable.
    loggedinUserSignal = signal<UserInterface | null | undefined>(undefined)



    // Firebase doesnt returns observables.
    register(email:string, password:string,userType:Number,displayName:String): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password).then(async response => {
        const fullUrl = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Users/${this.firebaseAuth.currentUser?.uid}.json`
        
        const rawForm = {
            'email':this.firebaseAuth.currentUser?.email,
            'display_name':displayName,
            'user_id':this.firebaseAuth.currentUser?.uid,
            'userType':userType,
            'registrationDate':this.firebaseAuth.currentUser?.metadata.creationTime
        }
        await this.httpClient.put(fullUrl, rawForm).subscribe(
            responseData => 
                {}
        );})

            return from(promise)
    }
   
    login(email:string,password:string): Observable<void> {

        const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password).then
        ( () =>{}) // Return nothing.

        return from(promise);
    }

    logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth); // This function terminates the session
        return from(promise);
    }
}