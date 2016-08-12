import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
selector:'edit-food-details',
inputs: ['food'],
template:`
<h3>Edit Food</h3>
<input [(ngModel)]="food.name"/>
<input [(ngModel)]="food.review"/>
<input [(ngModel)]="food.calories"/>
`
})
export class EditFoodDetailsComponent{
  public food: Food;
}
