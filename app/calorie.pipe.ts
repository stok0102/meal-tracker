import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: 'calorie',
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform = function (input: Food[], info){
    var desiredCalories = info[0];
    var output: Food[] = [];
    if (desiredCalories === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
