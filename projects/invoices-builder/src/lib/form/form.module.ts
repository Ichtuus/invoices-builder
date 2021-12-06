import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSelectorComponent } from './customer-selector/customer-selector.component';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateGeneratorModule } from '../template-generator/template-generator.module';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [FormComponent, CustomerSelectorComponent],
  imports: [CommonModule, TemplateGeneratorModule, BaseModule, SharedModule],
  exports: [FormComponent, CustomerSelectorComponent],
})
export class FormModule {}
