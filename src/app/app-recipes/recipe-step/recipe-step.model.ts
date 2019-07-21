import { RecipeStepContent } from './recipe-step-content/recipe-step-content.model';

export class RecipeStep {
  public id: string;
  public description: string;
  public time: number; // time in minutes
  public recipeStepContents: RecipeStepContent[];

  constructor(id: string, description: string, time: number, recipesStepContents: RecipeStepContent[]) {
    this.id = id;
    this.description = description;
    this.time = time;
    this.recipeStepContents = recipesStepContents;
  }
}
