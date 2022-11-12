import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modal_content!: any;
  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef<HTMLElement>;

  todo_form: any = FormGroup;

  constructor(private fb: FormBuilder, private todo_service: TodoService) {}

  ngOnInit(): void {
    this.todo_form = this.fb.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
    });

    this.todo_service.editing
      .pipe(takeUntil(this.todo_service.unsubscribe$))
      .subscribe((editing) => {
        editing
          ? this.title.setValue(
              this.todo_service.todo_list[this.todo_service.index].title
            )
          : null;
      });
  }

  ngOnDestroy(): void {
    this.todo_service.doUnsubscribe();
    console.log('unsubscribed!');
  }

  get title() {
    return this.todo_form.get('title');
  }

  onSubmit() {
    /* if editing */
    if (this.todo_service.editing.value) {
      this.todo_service.todo_list[this.todo_service.index] =
        this.todo_form.value;
    }

    // if adding new */
    else {
      this.todo_service.todo_list.push(this.todo_form.value);
    }

    this.closeModal();
  }

  closeModal() {
    this.closeModalBtn!.nativeElement.click();
    this.todo_service.reset();
    this.todo_form.reset();
  }
}
