// learning portal : 
// https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
import { interval,of,from, BehaviorSubject,Subject,merge,race,forkJoin,throwError } from 'rxjs';
import { mergeMap, take,map, delay,mergeAll,switchMap,concatMap,combineAll,scan,distinctUntilChanged,reduce,pluck,partition,catchError,groupBy,toArray,mapTo} from 'rxjs/operators';
import *  as ops from 'rxjs/operators';
// RxJS v6+
import { timer, combineLatest } from 'rxjs';

// timerOne 在1秒时发出第一个值，然后每4秒发送一次
const timerOne = timer(1000, 5000);
// timerTwo 在2秒时发出第一个值，然后每4秒发送一次
const timerTwo = timer(2000, 4000);
// timerThree 在3秒时发出第一个值，然后每4秒发送一次
const timerThree = timer(3000, 4000);

// combineLatest 还接收一个可选的 projection 函数
const combinedProject = combineLatest(
  timerOne,
  timerTwo,
  timerThree,
  (one, two, three) => {
    return `1Timer One (Proj) Latest: ${one}, 
             2 Timer Two (Proj) Latest: ${two}, 
              3Timer Three (Proj) Latest: ${three}`;
  }
);
// 输出值
const subscribe3 = combinedProject.subscribe(latestValuesProject =>
  console.log(latestValuesProject)
);

//lets create our data first
const data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);
data.pipe(
  map(datas => datas.map(data => `${data.brand} ${data.model}`))
).subscribe(data => console.log(data));

data.pipe(
  map(
    datas => datas.filter(data => data.brand === 'porsche')
 )
).subscribe(data => console.log(data))

const fetchData = (param) => {
     return of(`reterieved new data with param ${param}`).pipe(
       delay(1000)
     );
}
// mergeMap will subscribe your innder observables and merge together then pipe to your outer observables 
from([1,2,3,4]).pipe(
  map(
    data => fetchData(data),
   
  ), mergeAll()
).subscribe(data => console.log(data));

from([1,2,3,4]).pipe(
  switchMap(data => fetchData(data))
).subscribe(data => console.log(data));

const filterArray = ["brand=porsche", "color=red", "name=jenny","model=911"];
const activeFilter = new BehaviorSubject('');

// switchMap will cancel your previous observables arrived, and only handle with the last one 
activeFilter.pipe(
  switchMap(data => fetchData(data))
).subscribe(data => console.log(data));

const applyFilter = () => {
  filterArray.forEach((item,index) => {
    let applyedFilter = activeFilter.value;
    if(index === 0 ){
      applyedFilter = `?${item}`;
    }else{
      applyedFilter = `${applyedFilter}&${item}`;
    }
    activeFilter.next(applyedFilter);
  })
}

applyFilter();
// contactMap will preserve the order of the observables arrived, it will not handele with the next observables until the current one is finished 

const getData = (param) => {
  const delayTime = Math.floor(Math.random()* 1000) + 1;
  return of(`reterieved new data with param : ${param} and delay : ${delayTime}`).pipe(
    delay(delayTime)
  )
}

// normal map 
from([1,2,3,4]).pipe(
  map(data => getData(data))
).subscribe(val => val.subscribe(data => console.log(`normal map ${data}`)));

//mergeMap
from([1,2,3,4]).pipe(
  mergeMap(data => getData(data))
).subscribe(data => console.log(`merge Map : ${data}`)) 
// concat map 

from([1,2,3,4]).pipe(
  concatMap(data => getData(data) )
).subscribe(data => console.log(`concat Map : ${data}`))


const source4 = interval(1000).pipe(take(2));

const example5 = source4.pipe(
  map(val => interval(1000).pipe(map(i => `Result (${val}: ${i})`),take(5)))
)

// example.pipe(combineAll()).subscribe(val => console.log(`val : ${val}`))

//scan 
const source1 = of(1,2,3);
source1.pipe(
  scan((acc,curr) => acc+curr,3)  //log the sum of acc and curr ,start from 3
).subscribe(data => console.log(data)); 
//scan example 2
const subject = new Subject();
subject.pipe(
  scan((acc,curr) => Object.assign({},acc,curr),{})
  // will assign acc and curr into {}, if they have same key ,then merge it using the latest one
).subscribe(data => console.log(`accumulated object:`, data ));
//data object can be stringfy

subject.next({name:"jenny"});
subject.next({age:18});
subject.next({favoriteLanguage: "English"});
subject.next({name:"Tom"});
//scan example 3
const scanvarible = interval(1000).pipe(
  scan((acc,curr) => [...acc,curr],[]),
  
  map(val => val[val.length-1]),
  
  distinctUntilChanged()
)
// scanvarible.subscribe(console.log)

//distinctUntilChanged example 1 

const myArrywithDuplicates = from([1,2,1,1,1,12,3,3,4,4,3,2,5,6])

const distinctSub = myArrywithDuplicates.pipe(
  distinctUntilChanged()
  // this is just compare with the last one item
).subscribe(val => console.log(`distinct : `,val))

myArrywithDuplicates.pipe().subscribe(val => console.log(`normal value ${val}`))

//distinctUntilChanged example 2
const sampleObject = {name : "Jenny"}
const subjectObject = from ([
  sampleObject,
  sampleObject,
  sampleObject
]
)
subjectObject.pipe(distinctUntilChanged()).subscribe(console.log)

//reduce exampel
of(1,2,3,4).pipe(
  reduce((acc,curr) => acc+curr)
  // different from scan , reduce just send to the final result 10 , but scan will send out numbers in each step : 1,3,6,10
).subscribe(val => console.log(val))

//pluck exmaple : pick some properties to send 
from([{name: "Tome",age:30},{name:"Jenny",age:20}]).pipe(
  pluck("name")
).subscribe(console.log)

//example 2 
from([{name: "Tome",age:30, job:{title:"Developer",language: "English"}},{name:"Jenny",age:20}]).pipe(
  pluck("job","title")
).subscribe(console.log)

//partition split into even and odd
const source = from([1, 2, 3, 4, 5, 6]);
// 第一个值(events)返回 true 的数字集合，第二个值(odds)是返回 false 的数字集合
const [evens, odds] = source.pipe(partition(val => val % 2 === 0));
/*
  输出:
  "Even: 2"
  "Even: 4"
  "Even: 6"
  "Odd: 1"
  "Odd: 3"
  "Odd: 5"
*/
const subscribe = merge(
  evens.pipe(map(val => `Even: ${val}`)),
  odds.pipe(map(val => `Odd: ${val}`))
).subscribe(val => console.log(val));

//partition : greater than 3 throws error 

const examplep = from([1,2,3,4]).pipe(
  map(val => {
    if(val > 3){
      throw `${val} is greater than 3`
    }
    return {success: val}
  }),
  catchError(val => of({error : val }))
)

const [success, error] = examplep.pipe(
  partition(val => val.success)
);

merge(
  success.pipe( map (val => `Success! ${val.success}`)),
  error.pipe(map(val => `Error! ${val.error}`))
).subscribe(console.log)

// groupby will group your input into several groups based on the property you provided
const people = [
  {name:'Sue',age:32},
  {name:'Joe',age:30},
  {name:'Frank',age:25},
  {name:'Sarah',age:25}
]

from(people).pipe(
  groupBy(person => person.age),
  mergeMap(group => group.pipe(toArray()))
).subscribe(console.log)

// race will send out the first observable which send data 

const raceExamp = race(
  interval(2000),
  interval(1000).pipe(mapTo(`1s won!`),take(3)),
  interval(2500),
  interval(3000)
);
raceExamp.subscribe(val => console.log(val))

//takeWhile VS filter 
// takeWhile will ended until your input doesn't fit the filter parameter 
// filter will loop all your inputs and filter all the properties which fit your filter parameter 

from([3,3,4,4,56,6,3,3,3]).pipe(
  ops.takeWhile(val => val === 3)
).subscribe(val => console.log(`takeWhile : ${val}`))

from([3,3,4,4,56,6,3,3,3]).pipe(
  ops.filter(val => val === 3)
).subscribe(val => console.log(`filter : ${val}`))

//withLatestFrom is used inside an observable and it will get you the another abservable , and if both get at least a value , then send out 

const secondSource = interval(5000);
interval(1000).pipe(
  ops.withLatestFrom(secondSource), // wait until the second one also have a value
  map(
    ([first,second]) => {return `fisrt source(5s) ${first}, second source(1s) ${second}`}
  ),
  take(3)
).subscribe(console.log)
// fisrt source(5s) 4, second source(1s) 0
// fisrt source(5s) 5, second source(1s) 0
// fisrt source(5s) 6, second source(1s) 0

/*
  当所有 observables 完成时，将每个 observable 
  的最新值作为数组发出
*/
const example = forkJoin(
  // 立即发出 'Hello'
  of('Hello'),
  // 1秒后发出 'World'
  of('World').pipe(delay(1000)),
  // 抛出错误
  throwError('This will error')
).pipe(catchError(error => of(error)));
// 输出: 'This will Error'
const subscribe2 = example.subscribe(val => console.log(val));
