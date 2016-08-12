import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
  <h1>Angular Test</h1>
  <food-list [foodList]="foods"></food-list>
  `
})
export class AppComponent {
  public foods : Food[];
  constructor() {
    this.foods = [new Food("Ceviche", "I got food poisoning", 435, 0), new Food("Cevapi", "Muy delicioso", 214, 1), new Food("Cerveza", "Ah yes", 110, 2)]
  }
}
// export class AppComponent {
//   public albums: Album[];
//   public artists: string[];
//   public genres: string[];
//   constructor() {
//     this.albums = [new Album("The Ramones", "The Ramones", 10, "Punk"), new Album("Leave Home", "The Ramones", 10, "Punk"), new Album("Switched-on Bach", "Wendy Carlos", 15, "Classical")];
//     this.artists = ["The Ramones", "Wendy Carlos"];
//     this.genres = ["Punk", "Classical"];
//   }
// }
