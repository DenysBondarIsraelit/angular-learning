import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import {TodoRoutingModule} from './todo-routing.module';


@NgModule({
  declarations: [
    TodolistComponent,
    TodoitemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule {}
