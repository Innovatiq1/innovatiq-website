import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-cards',
  templateUrl: './img-cards.component.html',
  styleUrls: ['./img-cards.component.css']
})
export class ImgCardsComponent {
  @Input() card: any;
}
