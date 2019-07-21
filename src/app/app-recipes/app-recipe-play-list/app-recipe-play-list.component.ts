import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppRecipePlay } from '../app-recipe-play/app-recipe-play.model';
import { AppRecipePlayService } from '../app-recipe-play/app-recipe-play.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-recipe-play-list',
  templateUrl: './app-recipe-play-list.component.html',
  styleUrls: ['./app-recipe-play-list.component.css']
})
export class AppRecipePlayListComponent implements OnInit {
  recipesPlay: AppRecipePlay[];
  subscription: Subscription;

  constructor(private recipePlayService: AppRecipePlayService) { }

  ngOnInit() {
    this.subscription = this.recipePlayService.recipesPlayChanged
      .subscribe(
        (recipesPlay: AppRecipePlay[]) => {
          this.recipesPlay = recipesPlay;
        }
      );
    this.recipesPlay = this.recipePlayService.getRecipesPlay();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
