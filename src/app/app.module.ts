import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePipePipe } from './date-pipe.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
// import { HighlightQouteDirective } from './highlight-qoute.directive';
import { HighlightQuoteDirective } from './highlight-quote.directive';


@NgModule({
  declarations: [

    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent, 
    DatePipePipe, 
    QuotesFormComponent,
    QuotesFormComponent,
    // HighlightQouteDirective,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
