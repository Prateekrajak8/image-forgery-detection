import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent} from './pages/mainpage/mainpage.component'
import {TopnavbarComponent} from './components/topnavbar/topnavbar.component'
const routes: Routes = [

  {
    path: '',
    component: TopnavbarComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
     

 }
