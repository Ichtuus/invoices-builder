import { NgModule } from '@angular/core';
import { FormModule } from './form/form.module';
import { InvoicesBuilderComponent } from './invoices-builder.component';

@NgModule({
  declarations: [InvoicesBuilderComponent],
  imports: [FormModule],
  exports: [InvoicesBuilderComponent],
})
export class InvoicesBuilderModule {}
