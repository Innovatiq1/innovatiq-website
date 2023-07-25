import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-four',
  templateUrl: './part-four.component.html',
  styleUrls: ['./part-four.component.css']
})
export class PartFourComponent implements OnInit{
  cards: any = [];
  ngOnInit(): void {
    this.cards = [{imgsrc:"/assets/part-four/banking.png", title:"Banking & Finance"},
      {imgsrc:"/assets/part-four/education.png", title: "Education"},
  {   imgsrc:"/assets/part-four/healthcare.png", title: "Healthcare"}]

  // this.repeat(); //make slides move
  }

  repeat() {
    setTimeout(() => {
      this.moveSlide();
      this.repeat();
    }, 2000);
  }

  moveSlide() {
    const curr = this.cards.pop();
    if (curr) {
      this.cards.unshift(curr);
    }
    console.log(this.cards);
  }
  
}
