const { forkJoin, of, timer } = require("rxjs");
const { delay } = require("rxjs/operators");

// Example observables
const observable1$ = of("Hello").pipe(delay(1000)); // Emits 'Hello' after 1 second
const observable2$ = of("RxJS").pipe(delay(2000)); // Emits 'RxJS' after 2 seconds
const observable3$ = timer(3000); // Emits a single value (0) after 3 seconds

// Using forkJoin to combine the observables
forkJoin([observable1$, observable2$, observable3$]).subscribe(
  ([value1, value2, value3]) => {
    console.log(`Value from observable1: ${value1}`);
    console.log(`Value from observable2: ${value2}`);
    console.log(`Value from observable3: ${value3}`);
  },
  (error) => {
    console.error("Error:", error);
  },
  () => {
    console.log("All observables completed.");
  }
);
