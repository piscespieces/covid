import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsaComponent } from './estate-level/usa/usa.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'USA', component: UsaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
