import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-part-six',
  templateUrl: './part-six.component.html',
  styleUrls: ['./part-six.component.css']
})
export class PartSixComponent implements OnInit {
  companies: string[] = [];

  ngOnInit(): void {
    this.companies = ["/assets/part-six/abn-logo.png",
    "/assets/part-six/cse-logo.png",
    "/assets/part-six/hcl-logo.png",
    "/assets/part-six/big-ceva-logo.png",
    "/assets/part-six/big-socgen-logo.png"];
  }

  moveSlide() {
    const curr = this.companies.pop();
    if (curr) {
      this.companies.unshift(curr);
    }
  }

  reverseSlide() {
    const curr = this.companies.shift();
    if (curr) {
      this.companies.push(curr);
    }
  }
}
