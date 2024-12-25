import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  catchError,
  debounceTime,
  EMPTY,
  exhaustMap,
  filter,
  Observable,
  of,
} from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, AsyncPipe],
  template: `
    <label style="display: block;">Search in Google</label>

    <input type="search" [formControl]="searchControl" />

    <i style="display: block;">{{ searchResults$ | async }}</i>
  `,
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl<string>('');
  searchResults$: Observable<string> = new Observable<string>();

  private searchService = inject(SearchService);

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        filter((searchTerm) => !!searchTerm),
        debounceTime(500),
        // switchMap((searchTerm) =>
        //   this.searchService.search(searchTerm as string)
        // )
        exhaustMap((searchTerm) =>
          this.searchService
            .search(searchTerm as string)
            .pipe(catchError(() => EMPTY))
        ),
        catchError(() => EMPTY)
      )
      .subscribe((results) => {
        this.searchResults$ = of(results);
      });
  }
}
