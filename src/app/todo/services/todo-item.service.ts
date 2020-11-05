import { Injectable } from '@angular/core';
import { TODO } from '../mock-todoitem';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  todoList$ =  of([
    { id: 11, name: 'todo1' },
    { id: 12, name: 'todo2' },
    { id: 13, name: 'todo3' },
  ]);

  constructor() { }


  getTodoItem() {
    return this.todoList$;
  }
}
