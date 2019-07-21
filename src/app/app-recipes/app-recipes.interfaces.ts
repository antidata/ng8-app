import { AppRecipe } from './app-recipe.model';
import { RecipeStep } from './recipe-step/recipe-step.model';
import { RecipeStepContent } from './recipe-step/recipe-step-content/recipe-step-content.model';
import { Subject } from 'rxjs';

export interface IAppRecipes {
  recipesChanged: Subject<AppRecipe[]>;
  setRecipes(recipes: AppRecipe[]): void;
  getRecipes(): AppRecipe[];
  getRecipe(id: string): AppRecipe;
  addRecipe(recipe: AppRecipe): void;
  updateRecipe(newRecipe: AppRecipe): void;
  deleteRecipe(id: string): void;
}
