import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food',
  inputs: ['currentFood'],
  template:`
  <h2>{{currentFood.name}}</h2>
  <h4>{{currentFood.review}}</h4>
  <h4>{{currentFood.calories}}</h4>

  `
})
export class FoodComponent {
  public currentFood: Food;
}
