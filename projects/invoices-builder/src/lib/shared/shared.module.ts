import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatImportModule } from '../mat-import/mat-import.module';

@NgModule({
  exports: [CommonModule, MatImportModule],
})
export class SharedModule {}
