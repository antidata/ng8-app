import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRecipe } from '../../app-recipe.model';
import { AppRecipesService } from '../../app-recipes.service';
import { RecipesUi } from '../../recipes-ui.model';
import { RecipesUiService } from '../../recipes-ui.service';
import { AppRecipePlayService } from '../../app-recipe-play/app-recipe-play.service';

@Component({
  selector: 'app-recipes-list-details',
  templateUrl: './recipes-list-details.component.html',
  styleUrls: ['./recipes-list-details.component.css']
})
export class RecipesListDetailsComponent implements OnInit {
  @Input() recipe: AppRecipe;
  @Input() index: number;

  recipesUi: RecipesUi;
  uiSubscription: Subscription;

  constructor(private recipesUiService: RecipesUiService, private router: Router, private recipesPlayService: AppRecipePlayService) { }

  ngOnInit() {
    this.uiSubscription = this.recipesUiService.recipesUiChanged
      .subscribe((recipesUi: RecipesUi) => {
        this.recipesUi = recipesUi;
      });
    this.recipesUi = this.recipesUiService.getRecipesUi();
  }

  expandSteps() {
    this.recipesUi.expandedRecipeListDetailsId = this.recipe.id;
    this.recipesUiService.setRecipesUi(this.recipesUi);
  }

  isExpanded() {
    if(this.recipesUi != null) {
      return this.recipesUi.expandedRecipeListDetailsId === this.recipe.id;
    }
    return false;
  }

  onEdit() {
    this.router.navigate(['/recipes/'+this.recipe.id], {});
  }

  onStartPlayRecipe(recipe: AppRecipe) {
    this.recipesPlayService.startRecipePlay(recipe);
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }

}
