import { Component } from '@angular/core';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { Comp3Component } from './comp3.component';

@Component({
  selector: 'app-cache',
  imports: [Comp1Component, Comp2Component, Comp3Component],
  template: ` <app-comp1></app-comp1>
    <app-comp2></app-comp2>
    <app-comp3></app-comp3>`,
})
export class CacheComponent {}
