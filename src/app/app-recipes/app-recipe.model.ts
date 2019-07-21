import { RecipeStep } from './recipe-step/recipe-step.model';

export class AppRecipe {
  public id: string;
  public title: string;
  public owner: string;
  public createdOn: number; // Timestamp
  public recipeSteps: RecipeStep[];

  constructor(id: string, title: string, owner: string, createdOn: number, recipeSteps: RecipeStep[]) {
    this.id = id;
    this.title = title;
    this.owner = owner;
    this.createdOn = createdOn;
    this.recipeSteps = recipeSteps;
  }
}
