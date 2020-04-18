import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [FooterComponent, NavigationComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule { }
