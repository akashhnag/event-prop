import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { Event2Component } from './event2/event2.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    Event2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
