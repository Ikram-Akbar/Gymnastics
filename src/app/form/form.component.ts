import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userData: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.userData = this.fb.group({
      name: ["", [Validators.required]],
      password: ["",[Validators.required]]
    })
  }

  getControl(name) {
    return this.userData.get(name)
  }
  onSubmit() {
    console.log(this.userData.value)
  }

}
