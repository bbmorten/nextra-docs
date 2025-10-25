import { Observable, filter, from, interval, map, of, take, tap } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 3000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');


const observable2 = of(1, 2, 3).pipe(
  map((value) => value * 2),
  filter((value) => value > 3)
);

observable2.subscribe((value) => console.log(value));

const observer = {
  next: (value: any) => console.log(`Apple emitted ${value}`),
  error: (error: any) => console.log(`Apple error: ${error}`),
  complete: () => console.log(`Apple complete`),
};

observable2.subscribe(observer);

const apple$ = of('Apple1', 'Apple2', 'Apple3');

apple$.subscribe(observer);

// Starting from RxJS 6, you can use from() to convert an array to an observable.

console.log('>> from(), of() and of(...array)');

const apples = ['Apple1', 'Apple2', 'Apple3'];

const apple1$ = from(apples);
const apple2$ = of(...apples);
const apple3$ = of(apples);

apple1$.subscribe(observer);
apple2$.subscribe(observer);
apple3$.subscribe(observer);

// Interval Function as an Observable

console.log('>> Interval Function as an Observable');


/* const appleInterval$ = interval(1000);
appleInterval$.subscribe(observer); */

// RxJS Operators

console.log('>> RxJS Operators');

const appleInterval2$ = of(2,4,6,8,10,12,11,45,6723,24).pipe(
  map((value) => value * 2),
  tap((value) => console.log(`Value after map: ${value}`)),
  filter((value) => value % 3 === 0),
  take(3)
);

appleInterval2$.subscribe(observer);



