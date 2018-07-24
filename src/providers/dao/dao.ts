import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DaoProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello DaoProvider Provider');
  }

  getRecipes() {
    let recipes = this.storage.get('recipes');

    return recipes;
  }

  updateRecipes(recipes) {
    return this.storage.set('recipes', recipes);
  }

  getList() {
    return this.storage.get('list');
  }

  updateList(list) {
    return this.storage.set('list', list);
  }

  updateOther(list) {
    return this.storage.set('other', list);
  }

  updateComplete(list) {
    return this.storage.set('completed', list);
  }

  // createRecipe(recipe) {
  //   return this.storage.set(`recipe:${ recipe.name }`, recipe);
  // }

  // async deleteRecipe(recipe) {
  //   return await this.storage.remove(`setting:${ recipe.name }`);
  // }

  saveList() {

  }

}
