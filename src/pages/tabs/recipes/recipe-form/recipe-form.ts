import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../../../models/recipe-model';
import { IngredientFormPage } from './ingredient-form/ingredient-form';

/**
 * Generated class for the RecipeFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recipe-form',
  templateUrl: 'recipe-form.html',
})
export class RecipeFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let recipe = new Recipe;
    recipe.name = '';
    recipe.description = ''

    recipe.ingredients = [];

    this.recipe = recipe;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeFormPage');
  }

  recipe: Recipe;

  openIngredientForm(ingredient) {
    this.navCtrl.push(IngredientFormPage, { ingredient: ingredient });
  }

  public ionViewWillEnter() {
    if(this.navParams.get('ingredient') == null) {
      // console.log('Error: unable to save ingredient');
      return;
    }
    // console.log(this.navParams.get('ingredient'));
    this.recipe.ingredients.push(this.navParams.get('ingredient'));

    this.navParams.data.ingredient = null;
  }

saveRecipe() {
  // if(this.form.valid) {
  //   this.navCtrl.getPrevious().data.ingredient = this.ingredient;
  //   this.navCtrl.pop();
  // } else {
  //   this.submissionAttempt = true;
  // }
  this.navCtrl.getPrevious().data.recipe = this.recipe;
  this.navCtrl.pop();
}

}
