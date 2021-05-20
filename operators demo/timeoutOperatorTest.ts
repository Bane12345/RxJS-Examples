import { interval, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

export const timeoutOperatorTest = () => {
  interval(2000)
    .pipe(
      timeout(1000), //Timeout je operator koji baca gresku ako ne dodje do novog emitovanja odredjen broj milisekundi
      // ovde npr interval salje novi event na svakih 2000msec a timeout je na 1000msec
      catchError((err) => {
        console.log('Greska usled timeout-a');
        return of();
      })
    )
    .subscribe((data) => console.log(data));
};
