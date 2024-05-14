import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, push,set,get, } from 'firebase/database';
import {CategoryComponent} from '../category/category.component';
import {CategoryItemService} from '../categoryitemservice.service'
import { Inject } from '@angular/core';
import { Auth,user } from '@angular/fire/auth';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  selectedCategory: any;
  filteredItems: any[] = [];
 
  firebaseAuth = Inject(Auth)
 
  // Declare properties for item details
  itemName: string = '';
  itemPrice: number = 0;
  itemImage: string = '';

  // Set a boolean flag to toggle the visibility of the text areas
  showTextAreas: boolean = false;

  constructor(private categoryItemService: CategoryItemService) {}

  ngOnInit(): void {
    this.fetchItems();
    
  }

  addItem(): void {
    // Toggle the flag to show/hide text areas
    this.showTextAreas = !this.showTextAreas;
  }
/*
addCategory(): void {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
     
      const menuRef = ref(getDatabase(), `Menus/${categoryName}` );
      push(menuRef, { category: categoryName })
      .then(() => console.log('Category added successfully'))
      .catch(error => console.error('Error adding category: ', error));
      this.fetchCategories();
    }
  }


  fetchCategories(): void {
    const categoriesRef = ref(getDatabase(), `Menus`); // Reference to 'Menus' node
    get(categoriesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const categoriesObj = snapshot.val(); // Extract categories object from snapshot
          this.categories = Object.keys(categoriesObj).map(key => ({
            id: key, // Assuming each category has an id, adjust accordingly if not
            // Assuming category object has a name property
          })); // Convert object to array
          console.log('Fetched categories:', this.categories); // Log fetched categories
        } else {
          console.log("No categories found in the database.");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }
  
*/
addItemToDatabase(): void {
  // Check if a category is selected
  console.log('addItemToDatabase() function called');
  if (this.selectedCategory = this.categoryItemService.selectedCategory) {
    const newItem = {
      name: this.itemName,
      price: this.itemPrice,
      image: this.itemImage,
    };
    console.log('selected:', this.selectedCategory);
    // Construct the database reference path for the selected category
    const categoryRef = ref(getDatabase(), `Menus/${this.firebaseAuth.currentUser?.uid}/${this.selectedCategory}/Items`);

    // Push the new item to the selected category in the database, generating a unique key
    push(categoryRef, newItem)
      .then((newItemRef) => {
        console.log('Item added successfully with key:', newItemRef.key);
        // Reset input fields and hide text areas after adding the item
        this.itemName = '';
        this.itemPrice = 0;
        this.itemImage = '';
        this.showTextAreas = false;
      })
      .catch(error => console.error('Error adding item: ', error));
  } else {
    console.error('No category selected.');
  }
}

selectCategory(category: any): void {
  this.selectedCategory = category;
  console.log('selected categories:', this.selectedCategory); // Log fetched categories
 
}

fetchItems(): void {
  console.log('selected items:', this.selectedCategory); 
  const itemsRef = ref(getDatabase(), `Menus/${this.selectedCategory = this.categoryItemService.selectedCategory}`);
  get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const itemsObj = snapshot.val();
        this.items = Object.keys(itemsObj).map(key => itemsObj[key]);
        console.log('Fetched items:', this.items);
        this.filterItems(); // Call filterItems() after fetching items
      } else {
        console.log("No items found in the database.");
      }
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });
}

filterItems(): void {
  this.selectedCategory = this.categoryItemService.selectedCategory;
  if (this.selectedCategory = this.categoryItemService.selectedCategory) {
    const categoryRef = ref(getDatabase(), `Menus/${this.selectedCategory = this.categoryItemService.selectedCategory}`);
    get(categoryRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const itemsObj = snapshot.val();
          this.filteredItems = Object.keys(itemsObj).map(key => itemsObj[key]);
        } else {
          console.log("No items found for the selected category.");
          this.filteredItems = [];
        }
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        this.filteredItems = [];
      });
  } else {
    this.filteredItems = [];
  }
}
}
