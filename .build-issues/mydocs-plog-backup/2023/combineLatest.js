const { combineLatest, of, interval } = require('rxjs');
const { take } = require('rxjs/operators');

// Example observables
const observable1$ = of('Hello'); // Emits 'Hello' immediately
const observable2$ = interval(1000).pipe(take(5)); // Emits 0, 1, 2, 3, 4 every 1 second

// Using combineLatest to combine the observables
combineLatest([observable1$, observable2$]).subscribe(
  ([value1, value2]) => {
    console.log(`Latest value from observable1: ${value1}`);
    console.log(`Latest value from observable2: ${value2}`);
  },
  (error) => {
    console.error('Error:', error);
  },
  () => {
    console.log('combineLatest completed.');
  }
);