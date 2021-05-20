//Scan i reduce su operatori koji uz emitovanje nove vrednosti cuvaju i staru vrednost
//Reduce prosledjuje agregatnu vrednost tek kada se emituju sve verdnosti
//Scan prosledjuje novu vrednost svaki put ali nosi i podatak o staroj vrednosti

import { interval, of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

export const scanOperatorTest = () => {
  interval(1000)
    .pipe(
      scan((old: number, current: number) => {
        const newVal = current + old;
        return newVal;
      }, 0)
    )
    .subscribe((data) => console.log(data));
};

export const reduceOperatorTest = () => {
  of(1, 2, 3, 4, 5) //reduce ce koncanu vrednost proslediti tek na kraju observabla
    //tako da ako je observable BESKONACAN poput intervala - nikada nece proslediti konacnu vrednost
    .pipe(
      reduce((old: number, current: number) => {
        return current + old;
      }, 0)
    )
    .subscribe((data) => console.log(data));
};
