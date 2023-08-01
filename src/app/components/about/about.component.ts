import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
card= true;
  cards(){
  this.card= !this.card
}
before(){
  this.card=true;
}
}
