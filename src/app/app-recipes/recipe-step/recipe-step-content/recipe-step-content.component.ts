import { Component, OnInit, Input } from '@angular/core';
import { RecipeStepContent } from './recipe-step-content.model';

@Component({
  selector: 'app-recipe-step-content',
  templateUrl: './recipe-step-content.component.html',
  styleUrls: ['./recipe-step-content.component.css']
})
export class RecipeStepContentComponent implements OnInit {
  @Input() recipeStepContent: RecipeStepContent;
  
  constructor() { }

  ngOnInit() {
  }

}
