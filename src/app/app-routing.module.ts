import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { BodyMassIndexComponent } from './pages/body-mass-index/body-mass-index.component';
import { HomeComponent } from './pages/home/home.component';
import { MetabolicSyndromeComponent } from './pages/metabolic-syndrome/metabolic-syndrome.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { WaistCircumferenceComponent } from './pages/waist-circumference/waist-circumference.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'body-mass-index', component: BodyMassIndexComponent},
  {path: 'waist-circumference', component: WaistCircumferenceComponent},
  {path: 'metabolic-syndrome', component: MetabolicSyndromeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'tools', component: ToolsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
