import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-index.component.html',
  styleUrls: ['./body-mass-index.component.css']
})
export class BodyMassIndexComponent implements OnInit {

  bmiForm = this.fb.group({
    weight: [0, Validators.required],
    height: [0, Validators.required]
  })
 
  bmi:number = 0
  fixedBmi: number = 0
  

  calculate(){
    this.bmi = this.bmiForm.value.weight! / (this.bmiForm.value.height! * this.bmiForm.value.height!)
    this.fixedBmi = Math.round(this.bmi *100)/100;
    
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

}
