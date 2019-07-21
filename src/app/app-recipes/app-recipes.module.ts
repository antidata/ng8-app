import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRecipesComponent } from './app-recipes.component';
import { RecipeStepComponent } from './recipe-step/recipe-step.component';
import { AppRecipesListComponent } from './app-recipes-list/app-recipes-list.component';
import { RecipesListDetailsComponent } from './app-recipes-list/recipes-list-details/recipes-list-details.component';
import { RecipeStepContentComponent } from './recipe-step/recipe-step-content/recipe-step-content.component';
import { AppRecipesRoutingModule } from './app-recipes-routing.module';
import { EditAppRecipesComponent } from './edit-app-recipes/edit-app-recipes.component';
import { FormsModule } from '@angular/forms';
import { EditAppRecipeStepComponent } from './edit-app-recipes/edit-app-recipe-step/edit-app-recipe-step.component';
import { EditAppRecipeStepContentComponent } from './edit-app-recipes/edit-app-recipe-step/edit-app-recipe-step-content/edit-app-recipe-step-content.component';
import { AppRecipePlayComponent } from './app-recipe-play/app-recipe-play.component';
import { AppRecipePlayListComponent } from './app-recipe-play-list/app-recipe-play-list.component';

@NgModule({
  declarations: [AppRecipesComponent, RecipeStepComponent, AppRecipesListComponent, RecipesListDetailsComponent,RecipeStepContentComponent, EditAppRecipesComponent, EditAppRecipeStepComponent, EditAppRecipeStepContentComponent, AppRecipePlayComponent, AppRecipePlayListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRecipesRoutingModule
  ]
})
export class AppRecipesModule { }
