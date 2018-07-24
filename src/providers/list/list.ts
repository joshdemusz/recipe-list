import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe-model';
import { Ingredient } from '../../models/ingredient-model';
import { DaoProvider } from '../dao/dao';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  recipes: Recipe[];
  other: Recipe[];
  completed: Recipe[];
  
  constructor(public http: HttpClientModule, private dao: DaoProvider) {
    // this.recipes = this.dao.getList();

    this.dao.getList().then(res => {
      this.recipes = res;
    })
    // console.log('Hello RecipeProvider Provider');
  }

  addRecipeToList(recipe: Recipe) {
    // If recipe has already been added, do not add again
    let recipeIndex = this.recipes.indexOf(recipe);
    //console.log(recipeIndex);
    if(recipeIndex >= 0) {
      return;
    }

    console.log('before');

    this.recipes.push(recipe);

    this.dao.updateList(this.recipes);

    //console.log(this.dao.getRecipes());

    // this.dao.getRecipes(recipe).then((recipes) => {
    //   console.log(recipes);
    // });
    
    // this.dao.updateList(this.recipes);
  }

  completeItem(recipe: Recipe, ingredient: Ingredient) {
    let recipeIndex = this.recipes.indexOf(recipe);
    let ingredientIndex = this.recipes[recipeIndex].ingredients.indexOf(ingredient);
    
    recipe.ingredients.splice(ingredientIndex, 1);

    this.dao.updateList(this.recipes);
  }


}
