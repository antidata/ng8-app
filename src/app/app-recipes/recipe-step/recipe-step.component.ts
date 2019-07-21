import { Component, OnInit, Input } from '@angular/core';

import { RecipeStep } from './recipe-step.model';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {
  @Input() recipeStep: RecipeStep;

  constructor() { }

  ngOnInit() {
    console.log("Step: " + this.recipeStep.id);
  }

}
