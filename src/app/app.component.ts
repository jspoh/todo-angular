import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  /* template for modal content */
  modal_content = {
    header: 'new todo item',
    inputs: [
      {
        label: 'title',
      },
    ],
  };

  constructor(public todo_service: TodoService) {}

  ngOnInit() {}

  editTodo(i: number) {
    this.todo_service.index = i;
    this.todo_service.editing.next(true);
  }

  deleteTodo(i: number) {
    this.todo_service.todo_list.splice(i, 1);
  }
}
