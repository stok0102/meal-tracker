import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food',
  inputs: ['currentFood'],
  template:`
  <h1>{{currentFood.name}}</h1>
  `
})
export class FoodComponent {
  public currentFood: Food;
}
