import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userFormTypedControl } from '../Models/userInterface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userFrom: FormGroup;
  userInfo: any;
  userInfoCard: boolean = false;
  result: number | null;

  constructor() {}

  ngOnInit(): void {
    this.userFrom = new FormGroup<userFormTypedControl>({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      userAge: new FormControl(null, [Validators.required]),
      userGender: new FormControl('', [Validators.required]),
      userPhone: new FormControl(null, [
        Validators.required,
        Validators.pattern('(?:\\+88|88)?(01[3-9]\\d{8})'),
      ]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      userWeight: new FormControl(null, [Validators.required]),
      userHeight: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.userInfo = this.userFrom.value;
    this.calcBMI();
    this.userInfoCard = !this.userInfoCard;
    this.userFrom.reset();
  }

  calcBMI() {
    this.result =
      this.userFrom.value.userWeight / (this.userFrom.value.userHeight * 2);
  }
}
