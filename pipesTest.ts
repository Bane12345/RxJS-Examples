import { of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

export const pipesTest = () => {
  of(1, 2, 3, 4, 5)
    .pipe(
      map((n: any) => {
        if (n == 4) throw new Error('greska');
        return 2 * n;
      }),
      retry(2),
      catchError((err) => {
        console.log('Neresena greska');
        return of();
      })
    )
    .subscribe((data) => console.log(data));
};
