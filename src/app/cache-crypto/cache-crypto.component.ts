import { Component, inject, OnInit } from '@angular/core';
import { CacheCryptoService } from './cache-crypto.service';
export interface User {
  name: string;
}
@Component({
  selector: 'app-cache-crypto',
  template: ` <p>User: {{ user.name }}</p> `,
})
export class CacheCryptoComponent implements OnInit {
  private cacheCryptoService = inject(CacheCryptoService);

  user: User = this.cacheCryptoService.get('u');

  ngOnInit(): void {
    this.cacheCryptoService.set('u', { name: 'John Doe' });
    const value = this.cacheCryptoService.get('u');
    console.log(value);
  }
}
