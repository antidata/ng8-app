import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppRecipesComponent } from './app-recipes/app-recipes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', component: AppRecipesComponent },
  { path: 'recipes', loadChildren: './app-recipes/app-recipes.module#AppRecipesModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
