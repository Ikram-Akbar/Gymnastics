import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";



// interface for userValidation
export interface User {
  userName: string;
  userAge: number | null;
  userPhone: number | null;
  
  userEmail: string;
  userWeight: number | null;
  userHeight: number | null;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {


  // create an object for input validation

  userValidation: User = {
    userName: "",
    userAge: null,
    userPhone: null,
    userEmail: "",
    userWeight: null,
    userHeight: null,
   

  }


  formData: any = "";
  weight: any;
  height: any;
  calcBMI: any;



  constructor() {
    this.userValidation = {} as User

  }

  ngOnInit(): void {

  }


  // create an Instance for get form values

  userForm = new FormGroup({

    userName: new FormControl(this.userValidation.userName, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)
    ]),

    userAge: new FormControl(this.userValidation.userAge, [
      Validators.required,

    ]),

    userGender: new FormControl("male"),
    userPhone: new FormControl(this.userValidation.userPhone, [
      Validators.required,
      Validators.pattern('(?:\\+88|88)?(01[3-9]\\d{8})')

    ]),

    userEmail: new FormControl(this.userValidation.userEmail, [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),

    userWeight: new FormControl(this.userValidation.userWeight, [
      Validators.required,
    ]),
    userHeight: new FormControl(this.userValidation.userHeight, [
      Validators.required,
    ]),
    

  });



  // Declare a getter method
  get userName() {
    return this.userForm.get("userName");
  }
  get userAge() {
    return this.userForm.get("userAge")
  }
  get userPhone() {
    return this.userForm.get("userPhone")
  }
  get userEmail() {
    return this.userForm.get("userEmail")
  }
  get userWeight() {
    return this.userForm.get("userWeight")
  }
  get userHeight() {
    return this.userForm.get("userHeight")
  }
 


  // create a method for onsubmit form 

  onSubmit() {
    this.formData = this.userForm.value;
    console.log(this.formData);
    this.weight = this.formData.userWeight;
    this.height = this.formData.userHeight;
    this.calcBMI = (this.weight / (this.height * 2));
    this.formData.value.reset("")
  
  
  }

}





