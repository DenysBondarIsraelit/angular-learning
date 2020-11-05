import { Component, OnInit } from '@angular/core';
import { TODO } from '../../mock-todoitem';
import {TodoItemService} from '../../services/todo-item.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList;

  constructor(private todoService: TodoItemService) { }

  ngOnInit(): void {
    this.todoService.getTodoItem()
      .subscribe(res => this.todoList = res);
  }

}
