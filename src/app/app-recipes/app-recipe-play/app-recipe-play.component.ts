import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppRecipePlay } from './app-recipe-play.model';
import { AppRecipePlayService } from './app-recipe-play.service';
import { AppRecipe } from '../app-recipe.model';
import { AppRecipesService } from '../app-recipes.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-app-recipe-play',
  templateUrl: './app-recipe-play.component.html',
  styleUrls: ['./app-recipe-play.component.css']
})
export class AppRecipePlayComponent implements OnInit {
  @Input() recipePlay: AppRecipePlay;
  recipe: AppRecipe;
  currentStep: number;
  totalTime: number;
  isFinished: boolean;
  playTimer;
  subscription: Subscription;

  constructor(private recipePlayService: AppRecipePlayService,
              private recipesService: AppRecipesService) { }

  ngOnInit() {
    this.recipe = this.recipesService.getRecipe(this.recipePlay.recipeId);
    this.currentStep = this.recipePlayService.getCurrentStep(this.recipePlay);
    this.totalTime = this.recipesService.getTotalTime(this.recipe);
    this.isFinished = this.recipePlayService.isRecipePlayFinished(this.recipePlay);
    this.playTimer = timer(1000, 1000);
    this.subscription = this.playTimer.subscribe(val => {
      this.currentStep = this.recipePlayService.getCurrentStep(this.recipePlay);
      this.isFinished = this.recipePlayService.isRecipePlayFinished(this.recipePlay);
      if(this.isFinished) {
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
