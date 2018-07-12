import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ingredient } from '../../../../../models/ingredient-model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the IngredientFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ingredient-form',
  templateUrl: 'ingredient-form.html',
})
export class IngredientFormPage {

  ingredient: Ingredient;
  newIngredient: boolean;
  
  form: FormGroup;
  submissionAttempt: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(20)]),
      description: new FormControl(''),
      quantity: new FormControl(''),
      unit: new FormControl('')
    });
    
    console.log(navParams);
    if(navParams.data.ingredient == null) {
      this.newIngredient = true;
      this.ingredient = new Ingredient;
    } else {
      this.ingredient = navParams.data.ingredient;
    }

    this.submissionAttempt = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientFormPage');
  }

  saveIngredient() {
    if(this.form.valid) {
      this.navCtrl.getPrevious().data.ingredient = this.ingredient;
      this.navCtrl.pop();
    } else {
      this.submissionAttempt = true;
    }
  }

}
