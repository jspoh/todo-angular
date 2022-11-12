import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
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
