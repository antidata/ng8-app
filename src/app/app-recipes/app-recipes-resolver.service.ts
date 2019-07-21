import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AppRecipe } from './app-recipe.model';
import { RecipesDSService } from '../shared/recipes-ds.service';
import { AppRecipesService } from './app-recipes.service';

@Injectable({ providedIn: 'root' })
export class AppRecipesResolverService implements Resolve<AppRecipe[]> {
  constructor(
    private recipesDsService: RecipesDSService,
    private recipesService: AppRecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();
    return recipes;
    // if (recipes.length === 0) {
    //   return this.recipesDsService.fetchRecipes();
    // } else {
    //   return recipes;
    // }
  }
}
