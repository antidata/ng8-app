import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppRecipe } from './app-recipe.model';
import { RecipeStep } from './recipe-step/recipe-step.model';
import { RecipeStepContent } from './recipe-step/recipe-step-content/recipe-step-content.model';
import { LoggingService } from '../logging.service';
import { IAppRecipes } from './app-recipes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppRecipesService implements IAppRecipes {
  private recipes: AppRecipe[] = [
    new AppRecipe(
      "a",
      "Roasted B. Squash",
      "Owner 1",
      1563133321671,
      [new RecipeStep("a-1","Step 1",5,[new RecipeStepContent("a-1-1", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/11/0/rm0210_squash2.jpg.rend.hgtvcom.826.620.suffix/1371584112059.jpeg", "picture")]),
       new RecipeStep("a-2","Step 2",5,[new RecipeStepContent("a-2-1", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/11/0/rm0210_squash2.jpg.rend.hgtvcom.826.620.suffix/1371584112059.jpeg", "video")])]
    ),
    new AppRecipe(
      "b",
      "Roasted B. Squash 2",
      "Owner 1",
      1563133321671,
      [new RecipeStep("b-1","Step 1",5,[new RecipeStepContent("b-1-1", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/11/0/rm0210_squash2.jpg.rend.hgtvcom.826.620.suffix/1371584112059.jpeg", "picture")])]
    )
  ];

  recipesChanged = new Subject<AppRecipe[]>();

  constructor(private loggingService: LoggingService) {
  
  }

  setRecipes(recipes: AppRecipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string): AppRecipe {
    return this.recipes.find(rec => {
      return rec.id === id;
    });
  }

  addRecipe(recipe: AppRecipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: AppRecipe) {
    let idx = this.recipes.map(rec => {
      return rec.id;
    }).indexOf(newRecipe.id);
    if(idx != null) {
      this.recipes[idx] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    } else {
      this.loggingService.printLog("Non Existing ID: " + newRecipe.id);
    }
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(rec => {return rec.id !== id});
    this.recipesChanged.next(this.recipes.slice());
  }

  getTotalTime(recipe: AppRecipe): number {
    return recipe.recipeSteps.map(rs => {
      return rs.time;
    }).reduce((n, m) => n+m,0);
  }
}
