import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RollAmountComponent } from './roll-amount/roll-amount.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { FramecardComponent } from './framecard/framecard.component';
import { FinalFramecardComponent } from './final-framecard/final-framecard.component';
import { RollResultPipe } from './roll-result.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RollAmountComponent,
    ScorecardComponent,
    FramecardComponent,
    FinalFramecardComponent,
    RollResultPipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
