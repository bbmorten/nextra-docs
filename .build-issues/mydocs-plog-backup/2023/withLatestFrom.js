const { of, from } = require('rxjs');
const { withLatestFrom } = require('rxjs/operators');

// Function to generate random numbers between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array A: Random numbers (source observable)
const arrayA = [];
for (let i = 0; i < 10; i++) {
  arrayA.push(generateRandomNumber(1, 100));
}

// Array B and C (other observables)
const arrayB = [10, 20, 30, 40, 50];
const arrayC = [100, 200, 300, 400, 500];

// Source observable
const observableA$ = from(arrayA);

// Other observables
const observableB$ = from(arrayB);
const observableC$ = from(arrayC);

// Combined observable using withLatestFrom
const combined$ = observableA$.pipe(withLatestFrom(observableB$, observableC$));

// Subscription
combined$.subscribe(([aValue, bValue, cValue]) => {
  console.log(`A: ${aValue}, B: ${bValue}, C: ${cValue}`);
});
