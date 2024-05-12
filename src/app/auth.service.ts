import { Injectable, inject } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Observable, from } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    firebaseAuth = inject(Auth)

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
}