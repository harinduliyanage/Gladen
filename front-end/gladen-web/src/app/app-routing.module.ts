import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';

const routes: Routes = [
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'registration', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
