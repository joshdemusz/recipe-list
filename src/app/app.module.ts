import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/tabs/list/list';
import { RecipesPage } from '../pages/tabs/recipes/recipes';
import { RecipeFormPage } from '../pages/tabs/recipes/recipe-form/recipe-form';
import { IngredientFormPage } from '../pages/tabs/recipes/recipe-form/ingredient-form/ingredient-form';
import { RecipeProvider } from '../providers/recipe/recipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListPage,
    RecipesPage,
    RecipeFormPage,
    IngredientFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListPage,
    RecipesPage,
    RecipeFormPage,
    IngredientFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeProvider,
    HttpClientModule
  ]
})
export class AppModule {}
