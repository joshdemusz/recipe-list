import { Component } from '@angular/core';

import { ListPage } from './list/list';
import { RecipesPage } from './recipes/recipes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  list = ListPage;
  recipes = RecipesPage;

  constructor() {

  }
}
