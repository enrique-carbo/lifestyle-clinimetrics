import { AfterViewInit, Component, OnInit } from '@angular/core';
import data from '../../../assets/data/articles.json';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  public articles:{title:string, description:string, date:string, image:string, link:string}[] = data

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
