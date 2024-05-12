import { Injectable, inject, signal } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from "@angular/fire/auth"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { Observable, from } from "rxjs"
import { UserInterface } from "./user.interface"

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    firebaseAuth = inject(Auth)
    loggedinUser = user(this.firebaseAuth) // Null if user is not logged in - Logged In : User Data

    // Since we don't want all of the user's data, We can take ONLY what we need in the following
    // variable.
    loggedinUserSignal = signal<UserInterface | null | undefined>(undefined)

    // Firebase doesnt returns observables.
    register(email:string, username:string,password:string,userType:Number): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password).then(response => updateProfile(response.user,{displayName:username}))
            return from(promise)
    }

    login(email:string,password:string): Observable<void> {

        const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password).then
        ( () =>{}) // Return nothing.

        return from(promise);
    }

    logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth); // This function terminates the session.
        return from(promise);
    }
}