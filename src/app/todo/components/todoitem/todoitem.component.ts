import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todo;

  constructor() { }

  ngOnInit(): void {
  }
}
