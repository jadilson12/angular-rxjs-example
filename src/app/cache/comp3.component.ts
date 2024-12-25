import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CacheService } from './cache.service';

@Component({
  selector: 'app-comp3',
  imports: [AsyncPipe],
  template: `
    <p>
      comp1: @if (user$ | async; as user) {
      {{ user.name }}
      } @else { Loading... }
    </p>
  `,
})
export class Comp3Component {
  private cache = inject(CacheService);
  user$ = this.cache.getUser();
}
