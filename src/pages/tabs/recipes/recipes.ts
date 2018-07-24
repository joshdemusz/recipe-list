import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipeFormPage } from './recipe-form/recipe-form';
import { Recipe } from '../../../models/recipe-model';
import { ListProvider } from '../../../providers/list/list';
import { DaoProvider } from '../../../providers/dao/dao';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private listProvider: ListProvider, private dao: DaoProvider) {
    this.dao.getRecipes().then(res => {
      this.recipes = res;
      console.log(this.recipes);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  openRecipeForm() {
    this.navCtrl.push(RecipeFormPage);
  }

  addRecipeToList(recipe) {
    this.listProvider.addRecipeToList(recipe);
  }

  deleteRecipe(recipe) {
    console.log('in');
    
    const recipeIndex = this.recipes.indexOf(recipe);
    console.log(recipeIndex);
    this.recipes.splice(recipeIndex, 1);
    this.dao.updateRecipes(this.recipes);
  }

  public ionViewWillEnter() {
    if(this.navParams.get('recipe') == null) {
      // console.log('Error: unable to save recipe');
      return;
    }
    this.recipes.push(this.navParams.get('recipe'));
    this.dao.updateRecipes(this.recipes);

    this.navParams.data.recipe = null;
  }

}
