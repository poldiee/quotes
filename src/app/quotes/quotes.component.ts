import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Cool quotes';
  quotes :Quote[]=[
    {id:1,name:'Huan',title:'Mission Statement',quote:'Draw inspiration from other people lifes The inspiring example of the people you admire is a great place to start with.',author:'Nathan Arthur'},
    {id:2,name:'Kate',title:'Cute Quotes',quote:'Be careful how you live you may be the only Bible some people ever read.',author:'Unknown'},
    {id:3,name:'Gakii',title:'Kindness',quote:'No kind action ever stops with itself. One kind action leads to another. Good example is followed.',author:'Hidden Power'},
    {id:4,name:'Chipmuk',title:'Encouragement',quote:'A pint of example is worth a gallon of advice.',author:'Unknown Author'},
    {id:3,name:'Grasher',title:'Icon',quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',author:'Nelson Mandela'},
    {id:3,name:'Minnie',title:'life',quote:'The way to get started is to quit talking and begin doing. ',author:'Walt Disney'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
