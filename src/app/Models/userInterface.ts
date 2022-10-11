import { FormControl } from "@angular/forms";

export interface userFormTypedControl {
    userName: FormControl<string |null>,
    userAge: FormControl<number | null>,
    userGender:FormControl<string|null>,
    userEmail: FormControl<string|null>,
    userPhone: FormControl<number | string>,
    userHeight: FormControl<number | null>,
    userWeight: FormControl<number| null>

}