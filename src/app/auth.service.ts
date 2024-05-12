import { Injectable, inject, signal } from "@angular/core"
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from "@angular/fire/auth"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { Observable, from } from "rxjs"
import { UserInterface } from "./user.interface"
import { Firestore, addDoc, collection, doc, getDoc } from "@angular/fire/firestore"


@Injectable({
    providedIn: 'root'
})

export class AuthService{

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
            password).then(response => {
                this.saveData(userType,displayName)
            })
            return from(promise)
    }

    saveData(userType:Number,displayName:String){
        const promise = addDoc(this.usersCollection,{
            'email':this.firebaseAuth.currentUser?.email,
            'display_name':displayName,
            'user_id':this.firebaseAuth.currentUser?.uid,
            'userType':userType
        },).then(
           // (response) => response.id = this.firebaseAuth.currentUser?.uid
        );
        return from(promise); 

    }

    async getData(uid:String)
    {
        const userDoc = doc(this.firestore,'Users',"b4LIENFJFmLjaF5vnrhv")
        const userSnapshot = await getDoc(userDoc)
        console.log(userSnapshot.data())
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