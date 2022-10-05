import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-waist-circumference',
  templateUrl: './waist-circumference.component.html',
  styleUrls: ['./waist-circumference.component.css']
})
export class WaistCircumferenceComponent implements OnInit {

  wcForm = this.fb.group({
    gender: ['', Validators.required],
    waist: [90, Validators.required]
  })

  cardResponse = false
  disableSlider = false
  disableGender = false

  calculate(){
    this.cardResponse = true
    this.disableSlider = true
    this.disableGender = true
  }

  delete(){
    this.wcForm.reset()
    this.cardResponse = false
    this.disableSlider = false
    this.disableGender = false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
