import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutTypedControl } from '../Models/userInterface';
import { SendAndReceiveDataService } from '../send-and-receive-data.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css'],
})
export class WorkoutDetailsComponent implements OnInit {
  workoutForm: FormGroup;
  workoutFormValue: Array<any> = [];
  userObj: object | any;
  fName: string;

  constructor( private serviceData:SendAndReceiveDataService) {}

  ngOnInit(): void {
    this.workoutForm = new FormGroup<WorkoutTypedControl>({
      calender: new FormControl('', [Validators.required]),
      workoutList: new FormControl('', [Validators.required]),
      distance: new FormControl(null, [Validators.required]),
      calory: new FormControl(null, [Validators.required]),
    });
    
    
  }

  onSubmit() {
    this.workoutFormValue.push(this.workoutForm.value);
    this.workoutForm.reset();
  }

}
