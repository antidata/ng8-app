import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppRecipesService } from '../app-recipes.service';
import { AppRecipe } from '../app-recipe.model';
import { RecipeStep } from '../recipe-step/recipe-step.model';
import { RecipeStepContent } from '../recipe-step/recipe-step-content/recipe-step-content.model';
import { FormsModule } from '@angular/forms';
import { RecipesUi } from '../recipes-ui.model';
import { RecipesUiService } from '../recipes-ui.service';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-app-recipes',
  templateUrl: './edit-app-recipes.component.html',
  styleUrls: ['./edit-app-recipes.component.css']
})
export class EditAppRecipesComponent implements OnInit {
  id: string;
  editMode: boolean;
  currentRecipe: AppRecipe;
  currentStep: RecipeStep;

  recipesUi: RecipesUi;
  uiSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: AppRecipesService,
    private router: Router,
    private recipesUiService: RecipesUiService) { }

  ngOnInit() {
    console.log('Edit...');
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      if(this.editMode) {
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      } else {
        this.currentRecipe = new AppRecipe(uuid(), "New Recipe", "", 1563133321671, []);
      }
    });

    this.uiSubscription = this.recipesUiService.recipesUiChanged
      .subscribe((recipesUi: RecipesUi) => {
        this.recipesUi = recipesUi;
      });
    this.recipesUi = this.recipesUiService.getRecipesUi();
  }

  onAddStep() {
    this.currentStep = new RecipeStep(uuid(), "", 0, []);
    this.currentRecipe.recipeSteps.push(this.currentStep);
    this.recipesUi.editingStep = true;
    this.recipesUiService.setRecipesUi(this.recipesUi);
    console.log(this);
  }

  onSaveRecipe() {
    if(this.editMode) {
      this.recipeService.updateRecipe(this.currentRecipe);
    } else {
      this.recipeService.addRecipe(this.currentRecipe);
    }

    this.router.navigate([''], {relativeTo: this.route});
  }

  onDeleteStep(step) {
    this.currentRecipe.recipeSteps = this.currentRecipe.recipeSteps.filter(rs => {
      return rs.id != step.id;
    });
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }
}
