import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from 'app/home-page/home-page.component';
import {AboutUsComponent} from 'app/about-us/about-us.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'aboutus', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutiranjeRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
