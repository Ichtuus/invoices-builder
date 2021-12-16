import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomerSelectorService } from '../customer-selector.service';

@Component({
  selector: 'lib-customer-selector',
  templateUrl: './customer-selector.component.html',
  styleUrls: ['./customer-selector.component.scss'],
})
export class CustomerSelectorComponent implements OnInit {
  @ViewChild('test') toggleButton!: ElementRef;

  constructor(private cs: CustomerSelectorService) {}

  data!: {};

  selectMode = false;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit() {
    console.log('data', this.data);
    // this.cs.allObservable.subscribe((d) => (this.data = d));
  }

  onChange(event: any) {
    console.log('e', event);
    this.data = event;
    this.cs.setUpdatedData(this.data);
  }
}
