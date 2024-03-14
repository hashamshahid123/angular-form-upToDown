import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
form!: FormGroup;

constructor(private fb:FormBuilder) {}

ngOnInit(): void {
  this.form = this.fb.group({
    control1:['', Validators.required],
    control2:['', Validators.required],
    control3:['', Validators.required],
    control4:['', Validators.required],
    control5:['', Validators.required],
  })
}

onSubmit() {
  if (this.form.valid) {
    console.log(this.form.value);
  }else {
    this.form.markAllAsTouched();
  }
}
}
