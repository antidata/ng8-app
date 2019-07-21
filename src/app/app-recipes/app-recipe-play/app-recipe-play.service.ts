import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppRecipePlay } from './app-recipe-play.model';
import { AppRecipesService } from '../app-recipes.service';
import { AppRecipe } from '../app-recipe.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AppRecipePlayService {
  private recipesPlay: AppRecipePlay[] = [new AppRecipePlay("a-play", "a", 1563642286917)];

  public recipesPlayChanged = new Subject<AppRecipePlay[]>();

  constructor(private recipesService: AppRecipesService) { }

  startRecipePlay(recipe: AppRecipe) {
    let newPlay = new AppRecipePlay(uuid(), recipe.id, ((new Date()).getTime()));
    let newPlays = this.recipesPlay.slice();
    newPlays.push(newPlay);
    this.setRecipesPlay(newPlays);
  }

  setRecipesPlay(recipesPlay: AppRecipePlay[]) {
    console.log('updating recipes play..');
    this.recipesPlay = recipesPlay;
    this.recipesPlayChanged.next(this.recipesPlay);
  }

  getRecipesPlay(): AppRecipePlay[] {
    return this.recipesPlay;
  }

  isRecipePlayFinished(recipePlay: AppRecipePlay): boolean {
    let now = (new Date()).getTime() / 1000; // now in secs. The best will be to add a 'time' service for the whole app
    let elapsedTime = now - (recipePlay.startedOn / 1000);
    let recipe = this.recipesService.getRecipe(recipePlay.recipeId);
    let totalTime = this.recipesService.getTotalTime(recipe);
    return elapsedTime > totalTime;
  }

  getCurrentStep(recipePlay: AppRecipePlay): number {
    let recipe = this.recipesService.getRecipe(recipePlay.recipeId);
    if(!this.isRecipePlayFinished(recipePlay)) {
      let now = (new Date()).getTime() / 1000; // now in secs. The best will be to add a 'time' service for the whole app
      let elapsedTime = now - (recipePlay.startedOn / 1000);
      return recipe.recipeSteps.reduce((step, sStep) => {
        if(sStep.time < elapsedTime) {
          elapsedTime = elapsedTime - sStep.time;
          return step+1;
        }
        return step;
      }, 1);
    }
    return recipe.recipeSteps.length;
  }
}
