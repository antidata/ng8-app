import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRecipesComponent } from './app-recipes.component';
import { AppRecipesListComponent } from './app-recipes-list/app-recipes-list.component';
import { AppRecipesResolverService } from './app-recipes-resolver.service';
import { EditAppRecipesComponent } from './edit-app-recipes/edit-app-recipes.component';
// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppRecipesComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: AppRecipesListComponent },
      { path: 'new', component: EditAppRecipesComponent },
      {
        path: ':id',
        component: EditAppRecipesComponent,
        resolve: [AppRecipesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRecipesRoutingModule {}
