import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search(searchTerm: string): Observable<string> {
    return of(searchTerm).pipe(
      tap(() => console.log(`searching for ${searchTerm}`)),
      // Simulate a network request
      delay(1000),
      // Simulate error handling
      map((term) => {
        if (term === 'error') {
          throw new Error('Failed to search');
        }
        return `results for ${term}`;
      })
    );
  }
}
