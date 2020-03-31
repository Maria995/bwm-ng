import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  componentTitle = "I am an app from app.component.ts";

    clickHandler()
  {
    alert("I AM CLICKED");

  }

}
