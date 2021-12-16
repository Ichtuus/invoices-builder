import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-customer-selector',
  templateUrl: './customer-selector.component.html',
  styleUrls: ['./customer-selector.component.scss'],
})
export class CustomerSelectorComponent implements OnInit {
  @ViewChild('test') toggleButton!: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  selectMode = false;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
