import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../view/view.module';
import { PreventDefaultDirective } from './directives/button/prevent-default.directive';

@NgModule({
  declarations: [PreventDefaultDirective],
  imports: [CommonModule],
  exports: [ViewModule, PreventDefaultDirective],
})
export class BaseModule {}
