import { Component } from '@angular/core';

@Component({
  selector: 'app-user-restaurant-list',
  templateUrl: './user-restaurant-list.component.html',
  styleUrl: './user-restaurant-list.component.css'
})
export class UserRestaurantListComponent {
  items = [["title1", "description1", "free", "100"],
  ["title2", "desc2", "10", "150"],
  ["title3", "desc3", "20", "200"],
  ["title4", "desc4", "30", "250"],]
}
