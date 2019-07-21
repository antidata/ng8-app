import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RecipeStep } from '../../recipe-step/recipe-step.model';
import { RecipeStepContent } from '../../recipe-step/recipe-step-content/recipe-step-content.model';
import { RecipesUi } from '../../recipes-ui.model';
import { RecipesUiService } from '../../recipes-ui.service';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-app-recipe-step',
  templateUrl: './edit-app-recipe-step.component.html',
  styleUrls: ['./edit-app-recipe-step.component.css']
})
export class EditAppRecipeStepComponent implements OnInit {
  @Input() recipeStep: RecipeStep;
  currentStepContent: RecipeStepContent;
  editStepContent: RecipeStepContent;

  recipesUi: RecipesUi;
  uiSubscription: Subscription;

  constructor(private recipesUiService: RecipesUiService) {
  }

  ngOnInit() {
    this.uiSubscription = this.recipesUiService.recipesUiChanged
      .subscribe((recipesUi: RecipesUi) => {
        this.recipesUi = recipesUi;
      });
    this.recipesUi = this.recipesUiService.getRecipesUi();
  }

  onAddContent() {
    this.currentStepContent = new RecipeStepContent(uuid(), "", "");
    this.recipeStep.recipeStepContents.push(this.currentStepContent);
    this.recipesUi.editingStepContent = true;
    this.recipesUiService.setRecipesUi(this.recipesUi);
  }

  onDeleteStepContent(stepContent) {
    this.recipeStep.recipeStepContents = this.recipeStep.recipeStepContents.filter(rsc => {
      return rsc.id != stepContent.id;
    });
  }

  onDone() {
    this.editStepContent = null;
    this.recipesUi.editingStep = false;
    this.recipesUiService.setRecipesUi(this.recipesUi);
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }
}
