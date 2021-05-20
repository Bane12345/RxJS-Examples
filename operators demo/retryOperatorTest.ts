import { of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export const retryOperatorTest = () => {
  of(1, 2, 3)
    .pipe(
      tap((data) => {
        if (data == 2) throw new Error('greska');
      }), //tap operator ne mora da ima povratnu vrednost jer on samo prosledjuje ulaznu vrednost

      /////////////////
      retry(2), //ukoliko nastane greska probace da ponovi JOS 2 puta (ukupno 3), ukoliko ne uspe ni iz treceg prosledice gresku
      /////////////////
      catchError((err) => {
        console.log('Nismo uspeli da resimo gresku: ', err.msg);
        return of();
      })
    )
    .subscribe((data) => console.log(data));
};
