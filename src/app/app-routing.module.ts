import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyMassIndexComponent } from './pages/body-mass-index/body-mass-index.component';
import { HomeComponent } from './pages/home/home.component';
import { WaistCircumferenceComponent } from './pages/waist-circumference/waist-circumference.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'body-mass-index', component: BodyMassIndexComponent},
  {path: 'waist-circumference', component: WaistCircumferenceComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
