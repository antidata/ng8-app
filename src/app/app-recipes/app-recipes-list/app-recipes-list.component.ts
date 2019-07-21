import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppRecipesService } from '../app-recipes.service';
import { AppRecipe } from '../app-recipe.model';
@Component({
  selector: 'app-app-recipes-list',
  templateUrl: './app-recipes-list.component.html',
  styleUrls: ['./app-recipes-list.component.css']
})
export class AppRecipesListComponent implements OnInit, OnDestroy {
  recipes: AppRecipe[];
  subscription: Subscription;

  constructor(private appRecipesServices: AppRecipesService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.appRecipesServices.recipesChanged
      .subscribe(
        (recipes: AppRecipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.appRecipesServices.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
