import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-waist-circumference',
  templateUrl: './waist-circumference.component.html',
  styleUrls: ['./waist-circumference.component.css']
})
export class WaistCircumferenceComponent implements OnInit {

  wcForm = this.fb.group({
    gender: [{value: '', disabled: false}, Validators.required],
    waist: [{value: 90, disabled: false}, Validators.required]
  })

  cardResponse = false
 
  calculate(){
    this.cardResponse = true
    this.wcForm.get('gender')?.disable({onlySelf: true})
    this.wcForm.get('waist')?.disable({onlySelf: true})
  }

  delete(){
    this.wcForm.reset()
    this.cardResponse = false
    this.wcForm.get('gender')?.enable()
    this.wcForm.get('waist')?.enable()
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
