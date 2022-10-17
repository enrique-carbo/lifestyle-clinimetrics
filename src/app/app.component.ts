import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'lifestyle-clinimetrics';
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
  

  
}
