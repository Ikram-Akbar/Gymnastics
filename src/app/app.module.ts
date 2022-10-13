import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { WorkoutDetailsService } from './workout-details/workout-details.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    WorkoutDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
