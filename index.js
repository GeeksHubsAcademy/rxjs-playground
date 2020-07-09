const {
    Observable,
    of,
    from,
    range,
    BehaviorSubject
} = require('rxjs');
const {
    filter,
    map,
    scan
} = require('rxjs/operators');

// const promise = new Promise((resolve, reject) => {
//     console.log('promesa pidiendo genres...')
//     setTimeout(() => {
//         resolve({
//             genres: []
//         });
//     }, 2000);
// });
// const observable = Observable.create(observer => {
//     console.log('observable pidiendo genres...')
//     setTimeout(() => {
//         observer.next({
//             genres: []
//         });
//         observer.next(2);
//     }, 2000);
// });
const numbers = range(1, 4)
    // const subscription = observable.subscribe(value => console.log(value), console.error, () => console.log('completado'));
    // subscription.unsubscribe()
    // promise.then(console.log)
    // numbers.pipe(
    //         // scan((acc, val) => acc + val),
    //         map(n => n * 3),
    //         filter(n => n % 2 !== 0),
    //     ).subscribe(console.log)
    // const names = from(['Felipe', 'Tomas'])
    // names.subscribe(console.log)
    // console.log(promise)

const behaviour_subject = new BehaviorSubject([]);

const subscription = behaviour_subject.asObservable();

behaviour_subject.next([1])

subscription.subscribe(console.log)
behaviour_subject.next([1, 2])

subscription.subscribe(v => console.log('second subscription ', v))
behaviour_subject.next([1, 2, 3])