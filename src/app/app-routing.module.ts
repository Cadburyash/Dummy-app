import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';


const routes: Routes = [

  { path:'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },

  {
    path:'**',
    component: PageErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
