import { Observable, Observer, of } from 'rxjs';

export const basicObservableExample = function () {
  const myObservable: Observable<number> = of(1, 2, 3, 4);

  const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => {
      console.log('Observable completed');
    },
  };

  const subscription = myObservable.subscribe(observer);
};
