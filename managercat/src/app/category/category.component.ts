import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database';
import { getDatabase, set , ref, push,get } from 'firebase/database';
import {CategoryItemService} from '../categoryitemservice.service'
import { Inject } from '@angular/core';
import { Auth,user } from '@angular/fire/auth';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   dpPath : string= 'https://console.firebase.google.com/u/0/project/meal-dash-baaed/database/meal-dash-baaed-default-rtdb/data/~2F/Menus/${categoryName}' 
   categories: any[] = []; 

  selectedCategory: any;

  firebaseAuth = Inject(Auth)

  constructor(public database: Database , private categoryItemService: CategoryItemService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  addCategory(): void {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
     
      const menuRef = ref(getDatabase(), `Menus/${this.firebaseAuth.currentUser?.uid}/${categoryName}` );
      push(menuRef, { category: categoryName })
      .then(() => console.log('Category added successfully'))
      .catch(error => console.error('Error adding category: ', error));
      this.fetchCategories();
    }
  }


  fetchCategories(): void {
    const categoriesRef = ref(getDatabase(), `Menus`); 
    get(categoriesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const categoriesObj = snapshot.val(); 
          this.categories = Object.keys(categoriesObj).map(key => ({
            id: key, 

          })); 
          console.log('Fetched categories:', this.categories); 
        } else {
          console.log("No categories found in the database.");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }
  
  selectCategory(category: any): void {
    this.selectedCategory = category;
    this.categoryItemService.selectedCategory = category;
    console.log('selected categories:', this.selectedCategory); 
  }
}
