import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTemplateComponent } from './view-template/view-template.component';

@NgModule({
  declarations: [ViewTemplateComponent],
  imports: [CommonModule],
  exports: [ViewTemplateComponent],
})
export class ViewModule {}
