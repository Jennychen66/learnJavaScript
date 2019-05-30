// learning portal : RxJs https://www.learnrxjs.io/operators/transformation/mergemap.html
// https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
import { interval,of,from, BehaviorSubject} from 'rxjs';
import { mergeMap, take,map, delay,mergeAll,switchMap,concatMap} from 'rxjs/operators';


// lets create our data first
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


