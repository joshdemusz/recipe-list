import { Ingredient } from "./ingredient-model";

export class Recipe {
    name: string;
    description: string;
    tags: string[];
    ingredients: Ingredient[];
}