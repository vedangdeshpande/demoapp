import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';

  today = new Date()
  price:number = 234.552
  basicsalary = 10000
  value:string = "Good Morning"
  amount = 1000.23
  lucky_winners = ["Parag", "Prashant", "Tushar", "Vicky", "Prajakta"]

  constructor() {}
}
