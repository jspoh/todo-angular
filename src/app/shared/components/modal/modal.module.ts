import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [ModalComponent],
})
export class ModalModule {}
