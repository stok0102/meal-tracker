import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  outputs: ['newFoodEvent'],
  template:`
  <div>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Review" class="col-sm-8 input-lg" #newReview>
    <input type="number" min="0" placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addFood(newName, newReview, newCalories, foodId)" class="btn-warning btn-lg add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent{
  public newFoodEvent: EventEmitter<Food>;
  constructor(){
    this.newFoodEvent = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userReview: HTMLInputElement, userCalories: HTMLInputElement, foodId: number) {
    if (userName.value === "" || userReview.value === "" || userCalories.value === "") {
      alert("field missing");
    } else {
      this.newFoodEvent.emit(new Food(userName.value, userReview.value, parseInt(userCalories.value), foodId));
      userName.value = "";
      userReview.value = "";
      userCalories.value = "";
    }
  }
}
