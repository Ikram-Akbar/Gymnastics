import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  WorkoutTypedControl,
  DropDownListTypedCheck,
} from '../Models/userInterface';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css'],
})
export class WorkoutDetailsComponent implements OnInit {
  workoutForm: FormGroup;
  workoutFormValues: Array<WorkoutTypedControl> = [];
  userObj: object;
  fName: string;
  tableShow: boolean = false;
  currentCalory: number;
  maxCalory: number = 0;
  dropDownItems: Array<DropDownListTypedCheck> = [
    { value: 'cycling', name: 'Cycling' },
    { value: 'swimming', name: 'swimming' },
    { value: 'walking', name: 'walking' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.workoutForm = new FormGroup<WorkoutTypedControl>({
      calender: new FormControl('', [Validators.required]),
      workoutList: new FormControl('', [Validators.required]),
      distance: new FormControl(null, [Validators.required]),
      calory: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    this.workoutFormValues.push(this.workoutForm.value);
    this.currentCalory = this.workoutForm.controls['calory'].value;
    if (this.currentCalory > this.maxCalory) {
      this.maxCalory = this.currentCalory;
      alert(`Congratulation You have burn : ${this.currentCalory} Kcl`);
    }

    this.tableShow = true;
    this.workoutForm.reset();
  }
}
