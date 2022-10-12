import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path:"workout", component:WorkoutDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
