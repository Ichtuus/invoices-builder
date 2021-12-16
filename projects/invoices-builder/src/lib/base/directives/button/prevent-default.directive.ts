import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[click-stop-propagation]',
})
export class PreventDefaultDirective {
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    console.log('PROUT');
    event.stopPropagation();
  }
}
