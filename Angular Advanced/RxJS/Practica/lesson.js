function print(val) {
    let el = document.getElementById('p')
    el.innerText = val
    document.body.appendChild(el)
}
function printClock(val) {
    let el = document.getElementById('clock')
    el.innerText = val
}

function printAnything(val) {
    let el = document.getElementById('anything')
    el.innerHTML = val
}

function printClicks(val) {
    let el = document.getElementById('clicks')
    el.innerHTML = val
}
function printClicksSW(val) {
    let el = document.getElementById('clicksSW')
    el.innerHTML = val
}

// Forma en la que se imprime algo

const observable = Rx.Observable.create( observer => {
    observer.next('Hello');
    observer.next('World');
})

observable.subscribe(val => print(val));

// Para eventos.

const clicks = Rx.Observable.fromEvent(document, 'click');

clicks.subscribe(click => console.log(click));

// Promesas a observables

const promise = new Promise((resolve, object) => {
    setTimeout(()=>{
        resolve('resolved!')
    }, 2500);
})

const obsFromPromise = Rx.Observable.fromPromise(promise);

obsFromPromise.subscribe(resolve => print(resolve))

// Timers

const timer = Rx.Observable.timer(4000)

timer.subscribe(done => print('Timer is done, and world disappear'))

//Interval

const interval = Rx.Observable.interval(1000)

interval.subscribe(int => printClock(new Date()))

// Anything

const anyThing = Rx.Observable.of('anything', ['you','want'], 23,{pool: 'Any'})

anyThing.subscribe(response => printAnything(response))


// Finalizar timeout

const timer2 = Rx.Observable.timer(4500)

timer2
    .finally(() => print('All Done'))
    .subscribe()

// Finalizar intervalo (Cronometro)

const intervalFinish = Rx.Observable.interval(500).finally(()=>print('All Done in Finish'))

const subscription = intervalFinish.subscribe(x => print(x))
    setTimeout(()=>{
        subscription.unsubscribe()
    },10000)

// Numbers

const numbers = Rx.Observable.of(10,100,1000)

numbers.map(num => Math.log(num))
.subscribe(x => print(x))

// JSON

const jsonString = '{"type": "Dog", "breed":"Pug"}';
const apiCall = Rx.Observable.of(jsonString)

apiCall
    .map(json => JSON.parse(json))
    .subscribe(
        obj =>{
            print("Type: "+obj.type)
            print("Breed: "+obj.breed)
        }
    )

// do.

const names = Rx.Observable.of('Simon','Garfunkie')

names 
        .do(name => print(name))
        .map(name => name.toUpperCase())
        .do(name => print(name))
        .subscribe()
    
// filter

const numbersToFilter = Rx.Observable.of(-3,-4,5,2,4,4,-9,3,53)

numbersToFilter
        .filter(number => number < 10)
        .map(number => print('Numbers Uppon 10 is: '+ number))
        .subscribe()

// First and last

const numbersToFilter2 = Rx.Observable.of(-3,-4,5,2,4,4,-9,3,53)

numbersToFilter2
        .first() // Cambia first por .last para traer el ultimo
        .map(number => print('First number: '+ number))
        .subscribe()

// Mouse events

const mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')

mouseEvents
        .throttleTime(2000)
        .subscribe(e => print('Mouse Moved at 2seconds'))

// scan

const clicksCount = Rx.Observable.fromEvent(document, 'click')

clicksCount
        .map(e => parseInt(Math.random()*10))
        .do(score => printClicks('Click score: +'+ score))
        .scan((highScore, score)=> highScore + score)
        .subscribe( highScore => printClicks('High Score: '+ highScore))

// switchMap

const clicksSW = Rx.Observable.fromEvent(document, 'click')

clicksSW
        .switchMap(click => {return Rx.Observable.interval(500)})
        .subscribe(i => printClicksSW(i))