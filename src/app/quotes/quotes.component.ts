import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Cool quotes';
  quotes :Quote[] = [
    new Quote (1,'Huan','Mission Statement','Draw inspiration from other people lifes The inspiring example of the people you admire is a great place to start with.','Nathan Arthur'),
    new Quote (2,'Kate','Quotes','Be careful how you live you may be the only Bible some people ever read.','Unknown'),
    new Quote (3,'Gakii','Kindness','No kind action ever stops with itself. One kind action leads to another. Good example is followed.','Hidden Power'),
    new Quote (4,'Chipmuk','Encouragement','A pint of example is worth a gallon of advice.','Unknown Author'),
    new Quote (5,'Grasher','Icon','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela'),
    new Quote (6,'Minnie','life','The way to get started is to quit talking and begin doing. ','Walt Disney'),
  ];
  // displayInfo(index){
  //   this.quotes[index].showInfo = !this.quotes[index].showInfo;
  // }
  // toggle(index: number){

    get sortQuotes() {
      return this.quotes.sort((a, b) => {
        return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
      });
    }
    addedQuote(quote){
      let arraysize = this.quotes.length;
      quote.id = arraysize+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    quoteDelete(isRead: any, index: number){
      if (isRead) {
        // let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)
        let toDelete = confirm(`Are you sure you want to delete Quote?`)
        if(toDelete){
          this.quotes.splice(index,1);
        }
        
      }
    }
    displayInfo(index: number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
