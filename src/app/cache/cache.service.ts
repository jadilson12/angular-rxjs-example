import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private _user: BehaviorSubject<User | unknown> = new BehaviorSubject<
    User | unknown
  >(null);

  setUser(user: User): void {
    this._user.next(user);
  }

  getUser(): Observable<User> {
    if (this._user.getValue() === null) {
      console.log('User not found in cache, fetching user...');
      const user = of({
        name: 'John Doe',
        email: 'John@hmail.com',
      }).pipe(
        tap(() => console.log('fetching user...')),
        // Simulate a network request
        delay(1000),
        tap(() => console.log('fetched user'))
      );

      user.subscribe((user) => {
        this.setUser(user);
      });
    }

    return this._user.asObservable() as Observable<User>;
  }

  clearUser(): void {
    this._user.next(null);
  }

  hasUser(): boolean {
    return !!this._user.getValue();
  }
}
