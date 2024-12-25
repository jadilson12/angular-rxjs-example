import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CacheService } from './cache.service';

@Component({
  selector: 'app-comp2',
  imports: [AsyncPipe],
  template: `
    <p>
      comp2: @if (user$ | async; as user) {
      {{ user.name }}
      } @else { Loading... }
    </p>
  `,
})
export class Comp2Component {
  private cache = inject(CacheService);
  user$ = this.cache.getUser();
}
