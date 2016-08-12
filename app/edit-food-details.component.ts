import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
selector:'edit-food-details',
inputs: ['food'],
template:`
<h3>Edit Description: {{ food.description }}</h3>    
`
})
export class EditFoodDetailsComponent{
  public food: Food;
}
