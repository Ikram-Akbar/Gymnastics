import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutTypedControl } from '../Models/userInterface';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {
  workoutForm: FormGroup;
  workoutFormValue: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.workoutForm = new FormGroup<WorkoutTypedControl>({
      calender: new FormControl("", [Validators.required]),
      workoutList: new FormControl("", [Validators.required]),
      distance: new FormControl(null, [Validators.required]),
      calory: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {

    // console.log(this.workoutForm.value)
    this.workoutFormValue.push(this.workoutForm.value)
    console.log((this.workoutFormValue));

  }
}
