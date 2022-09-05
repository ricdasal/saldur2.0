import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(app: AppComponent) {
    app.showNav = false;
    app.showFoot = false;
   }

  ngOnInit(): void {
  }

}
