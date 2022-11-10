import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  /* dummy data */
  todo_list = [
    {
      title: 'Get groceries',
    },
    {
      title: 'Pay bills',
    },
    {
      title: 'Check news',
    },
  ];
}
