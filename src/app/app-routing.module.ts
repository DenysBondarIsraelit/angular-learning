import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'todo'},
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  },

];




const extraOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
