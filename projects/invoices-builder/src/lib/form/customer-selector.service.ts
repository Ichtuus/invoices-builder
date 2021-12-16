import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_NET_PROVIDER, NetProvider } from '../core/interfaces/net-provider';

@Injectable({
  providedIn: 'root',
})
export class CustomerSelectorService {
  constructor(@Inject(APP_NET_PROVIDER) private net: NetProvider) {}
  private items$ = new BehaviorSubject<any[]>([]);

  load(): Observable<any[]> {
    const todos = this.net.get<any>('http://127.0.0.1:5050/todos');
    todos.subscribe((data) => this.items$.next(data));
    return todos;
  }
}
