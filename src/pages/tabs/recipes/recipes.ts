import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipeFormPage } from './recipe-form/recipe-form';
import { Recipe } from '../../../models/recipe-model';
import { RecipeProvider } from '../../../providers/recipe/recipe';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeProvider: RecipeProvider) {
    this.recipes = []
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  openRecipeForm() {
    this.navCtrl.push(RecipeFormPage);
  }

  addRecipeToList(recipe) {
    console.log(recipe);
    //this.navCtrl.getPrevious().data.recipe = recipe;

    this.recipeProvider.addRecipeToList(recipe);

    
    // this.navCtrl.pop();
  }

  public ionViewWillEnter() {
    if(this.navParams.get('recipe') == null) {
      // console.log('Error: unable to save recipe');
      return;
    }
    this.recipes.push(this.navParams.get('recipe'));

    this.navParams.data.recipe = null;
  }

}
