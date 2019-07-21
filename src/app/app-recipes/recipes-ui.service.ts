import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipesUi } from './recipes-ui.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesUiService {
  private recipesUi: RecipesUi = new RecipesUi("");

  public recipesUiChanged = new Subject<RecipesUi>();

  constructor() { }

  setRecipesUi(recipeUi: RecipesUi) {
    console.log('updating..');
    this.recipesUi = recipeUi;
    this.recipesUiChanged.next(this.recipesUi);
  }

  getRecipesUi() {
    return this.recipesUi;
  }
}
