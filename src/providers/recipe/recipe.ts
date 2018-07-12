import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe-model';
import { Ingredient } from '../../models/ingredient-model';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {

  recipes: Recipe[];
  other: Recipe[];
  completed: Recipe[];
  
  constructor(public http: HttpClientModule) {
    this.recipes = [];
    // console.log('Hello RecipeProvider Provider');
  }

  addRecipeToList(recipe: Recipe) {
    // If recipe has already been added, do not add again
    let recipeIndex = this.recipes.indexOf(recipe);
    console.log(recipeIndex);
    if(recipeIndex >= 0) {
      return;
    }

    this.recipes.push(recipe);
  }

  completeItem(recipe: Recipe, ingredient: Ingredient) {
    let recipeIndex = this.recipes.indexOf(recipe);
    let ingredientIndex = this.recipes[recipeIndex].ingredients.indexOf(ingredient);
    
    recipe.ingredients.splice(ingredientIndex, 1);
  }


}
