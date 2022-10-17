import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  

  GoBMI(){
    this.router.navigate(['/body-mass-index']);
  }

  GoWC(){
    this.router.navigate(['/waist-circumference']);
  }

  GoMetabolicSyndrome(){
    this.router.navigate(['/metabolic-syndrome'])
  }

  constructor( private router: Router) { }

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
