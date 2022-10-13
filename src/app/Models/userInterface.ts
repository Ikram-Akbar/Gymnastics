import { FormControl } from "@angular/forms";

export interface userFormTypedControl {
    userName: FormControl<string >,
    userAge: FormControl<number >,
    userGender:FormControl<string>,
    userEmail: FormControl<string>,
    userPhone: FormControl<number | string>,
    userHeight: FormControl<number>,
    userWeight: FormControl<number>
}
export interface WorkoutTypedControl{
    calender: FormControl<string>,
    workoutList: FormControl<string>,
    distance: FormControl<number>,
    calory:FormControl<number>
}