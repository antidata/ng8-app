import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RecipeStepContent } from '../../../recipe-step/recipe-step-content/recipe-step-content.model';
import { RecipesUi } from '../../../recipes-ui.model';
import { RecipesUiService } from '../../../recipes-ui.service';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-app-recipe-step-content',
  templateUrl: './edit-app-recipe-step-content.component.html',
  styleUrls: ['./edit-app-recipe-step-content.component.css']
})
export class EditAppRecipeStepContentComponent implements OnInit {
  @Input() recipeStepContent: RecipeStepContent;

  recipesUi: RecipesUi;
  uiSubscription: Subscription;

  constructor(private recipesUiService: RecipesUiService) {}

  ngOnInit() {
    this.uiSubscription = this.recipesUiService.recipesUiChanged
      .subscribe((recipesUi: RecipesUi) => {
        this.recipesUi = recipesUi;
      });
    this.recipesUi = this.recipesUiService.getRecipesUi();
  }

  onDone() {
    this.recipesUi.editingStepContent = false;
    this.recipesUiService.setRecipesUi(this.recipesUi);
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }
}
