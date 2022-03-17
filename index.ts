import './style.css';
import { switchMap } from 'rxjs/operators';
import { of, map, Observable } from 'rxjs';
import { fromEvent, interval } from 'rxjs';

// let srcObservable= of(1,2,3,4)
// let innerObservable= of('A','B','C','D')
 
// srcObservable.pipe(
//   switchMap( val => {
//     console.log('Source value '+val)
//     console.log('starting new observable')
//     return innerObservable
//   })
// )
// .subscribe(ret=> {
//   console.log('Recd ' + ret);
// })

// let value = of(1,2,3,4,5)

// value.pipe( 
//   switchMap(val => {
//     return of(val * 2)
//   })
// ). subscribe (
//   result => {
//     console.log("swithed value " + result)
//   }
// )



const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));

 
// Open the console in the bottom right to see results.
