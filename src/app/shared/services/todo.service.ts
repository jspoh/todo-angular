import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

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

  editing = new BehaviorSubject<any>(false);
  unsubscribe$ = new Subject<void>();

  index = -1;

  reset() {
    this.index = -1;
    this.editing.next(false);
  }

  doUnsubscribe() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
