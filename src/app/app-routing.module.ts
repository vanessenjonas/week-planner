import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyRecipesComponent} from "./my-recipes/my-recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

const routes: Routes = [
  { path: 'my-recipes', component: MyRecipesComponent },
  { path: 'organize-week', component: RecipeListComponent },
  { path: '', redirectTo: '/my-recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
