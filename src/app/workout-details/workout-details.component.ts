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
  newArr: Array<number> = [1, 2, , 3, 4, 5, 6, 7];
  largeValue: number;
  dropDownItems: Array<DropDownListTypedCheck> = [
    { value: 'cycling', name: 'Cycling' },
    { value: 'swimming', name: 'swimming' },
    { value: 'walking', name: 'walking' },
  ];


  constructor() {
  }

  ngOnInit(): void {
    this.workoutForm = new FormGroup<WorkoutTypedControl>({
      calender: new FormControl('', [Validators.required]),
      workoutList: new FormControl('', [Validators.required]),
      distance: new FormControl(null, [Validators.required]),
      calory: new FormControl(null, [Validators.required]),
    });
  }
  findLargeValue() {
    this.largeValue = 0;
    for (let i = 0; i < this.newArr.length; i++){
      if (this.newArr[i] > this.largeValue) {
        this.largeValue = this.newArr[i]
      }
    }
 }
  onSubmit() {
    this.workoutFormValues.push(this.workoutForm.value);
    console.log(this.workoutFormValues);
    this.tableShow = true;
    this.workoutForm.reset();
    this.findLargeValue();
    console.log(this.largeValue);
  }
}
