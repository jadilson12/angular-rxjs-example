import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cache-crypto',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.component').then((c) => c.SearchComponent),
  },
  {
    path: 'cache',
    loadComponent: () =>
      import('./cache/cache.component').then((c) => c.CacheComponent),
  },

  {
    path: 'cache-crypto',
    loadComponent: () =>
      import('./cache-crypto/cache-crypto.component').then(
        (c) => c.CacheCryptoComponent
      ),
  },
];
