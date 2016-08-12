import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, NewFoodComponent, EditFoodDetailsComponent],
  template: `

    <div *ngFor="#food of foodList ">
      <food [currentFood]="food" (click)="foodClicked(food)"></food>
    </div>
    <new-food (newFoodEvent)="addFood($event)"></new-food>
    <edit-food-details *ngIf="selectedFood" [food]='selectedFood'></edit-food-details>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public onFoodSelect: EventEmitter<Food>;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
    console.log(clickedFood.name);
  }
  addFood(food: Food) {
    this.foodList.push(food);
  }
}
