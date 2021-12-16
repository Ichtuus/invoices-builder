import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { APP_NET_PROVIDER, NetProvider } from '../core/interfaces/net-provider';

@Injectable({
  providedIn: 'root',
})
export class CustomerSelectorService {
  private mySubject = new BehaviorSubject<any>([]);

  constructor() {}
  setUpdatedData(data: any) {
    console.log(data);
    this.mySubject.next(data);
  }
}
