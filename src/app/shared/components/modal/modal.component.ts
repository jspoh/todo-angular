import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modal_content!: any;

  todo_form: any = FormGroup;

  constructor(private fb: FormBuilder, private todo_service: TodoService) {}

  ngOnInit(): void {
    this.todo_form = this.fb.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  onSubmit() {
    this.todo_service.todo_list.push(this.todo_form.value);
  }
}
