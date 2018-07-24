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
import { ListProvider } from '../providers/list/list';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { DaoProvider } from '../providers/dao/dao';

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
    HttpClientModule,
    IonicStorageModule.forRoot()
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
    DaoProvider,
    ListProvider,
    HttpClientModule
  ]
})
export class AppModule {}
