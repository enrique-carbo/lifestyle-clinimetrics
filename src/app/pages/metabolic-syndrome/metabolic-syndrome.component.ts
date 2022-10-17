import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-metabolic-syndrome',
  templateUrl: './metabolic-syndrome.component.html',
  styleUrls: ['./metabolic-syndrome.component.css']
})
export class MetabolicSyndromeComponent implements OnInit {

  metabolicSyndrome: boolean = false
  response: boolean = false
  
  items: {name: string, checked: boolean}[] = [
    {name: 'Waist circumference over 94 cm (men) or 80 cm (women).', checked: false},
    {name: 'Fasting blood sugar over 100 mg/dl or pharmacologic treatment.', checked: false},
    {name: 'Fasting triglyceride (TG) level over 150 mg/dl or pharmacologic treatment.', checked: false},
    {name: 'Fasting high-density lipoprotein (HDL) cholesterol level less than 40 mg/dl (men) or 50 mg/dl (women) or pharmacologic treatment.', checked: false},
    {name: 'Blood pressure over 130/85 mmHg or pharmacologic treatment.', checked: false}
  ]

  calculate = ()=>{
    this.response = true
    let length = this.items.filter(i => i.checked === true).length
    console.log(length)
    console.log(this.items)
    if (this.items.filter(i => i.checked).length >= 3){
      this.metabolicSyndrome = true
      console.log(this.metabolicSyndrome)
    }
  }

  delete(){
    this.response = false
    this.metabolicSyndrome = false
    this.items.forEach(i => i.checked = false)
  }

  constructor() { }

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
