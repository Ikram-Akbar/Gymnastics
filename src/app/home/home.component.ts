import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface User {
  name: string;
  age: number | null;
  phone: number | null;
  email: string;
  weight: number | null;
  height: number | null;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  formData: any = '';
  result: number | null = null;
  userForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl<String>('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      userAge: new FormControl<Number | null>(null, [Validators.required]),
      userGender: new FormControl<String>('',
        [Validators.required]),
      userPhone: new FormControl<Number | null>(null, [
        Validators.required,
        Validators.pattern('(?:\\+88|88)?(01[3-9]\\d{8})'),
      ]),
      userEmail: new FormControl<String>('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      userWeight: new FormControl<Number | null>(null, [Validators.required]),
      userHeight: new FormControl<Number | null>(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.formData = this.userForm.value;
    console.log(this.formData);
    this.calcBMI();
    this.userForm.reset();
  }
  calcBMI() {
    this.result = this.formData.userWeight / (this.formData.userHeight * 2);
  }
}
