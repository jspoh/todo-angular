import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modal_content!: any;

  todo_form: any = FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todo_form = this.fb.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.todo_form.value);
  }
}
