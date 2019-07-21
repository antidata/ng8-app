import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeStepComponent } from './recipe-step.component';
import { RecipeStepContentComponent } from './recipe-step-content/recipe-step-content.component';



@NgModule({
  declarations: [RecipeStepComponent, RecipeStepContentComponent],
  imports: [
    CommonModule
  ]
})
export class RecipeStepModule { }
