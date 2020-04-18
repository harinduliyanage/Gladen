import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AppCommonModule} from "../common/app-common.module";



@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class AuthModule { }
