import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export const catchErrorOperatorTest = () => {
  of(1, 2, 3)
    .pipe(
      tap((data) => {
        if (data == 3) {
          throw new Error('greska');
        }
      }),
      //catchError je operator koji hvata greske koje nastanu unutar pipe metode
      //catchError MORA da vrati NOVI observable tok ili da baci gresku
      //Gresku koju uhvati catchError i obradi nece uhvatit error od observera
      catchError((error) => {
        console.log('Greska');
        return of(); //vracanje praznog observable
      })
    )
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error: Error) => {
        console.log('Dosklo je do greske: ', error.message); //Ako catchError uhvati gresku nece je uhvatiti ovaj error
      },
      complete: () => console.log('Obeservable completed'),
    });
};
