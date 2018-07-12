import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipeProvider } from '../../../providers/recipe/recipe';
import { Ingredient } from '../../../models/ingredient-model';
import { Recipe } from '../../../models/recipe-model';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeProvider: RecipeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  // public ionViewWillEnter() {
  //   if(this.navParams.get('recipe') == null) {
  //     // console.log('Error: unable to save recipe');
  //     return;
  //   }
  //   console.log(this.navParams.get('recipe'));
  //   this.recipes.push(this.navParams.get('recipe'));

  //   this.navParams.data.recipe = null;

  //   console.log(this.recipes);
  // }

}
