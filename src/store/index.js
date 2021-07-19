
import { rentalData } from './data';
//add functions - here a reducer that is a function that returns data
//we use combineReducers because we have below many functions that return data
import { createStore , combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore(){
    const reducers = combineReducers({
      rentals,
      rental
      //dataMaria: () => ['Maria', 'Love', 'Juliano'],

    })

    const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(reducers, reduxExtension);

    return store;

  }

    //equivalent to....
    // const reducers = {
    //   rentals : () => {
    //      return rentalData;
    //   },
    //
    //   data1: () => ['a', 'b', 'c'],
    //
    //   data2: () => ['1', '2', '3', '4'],
    //
    //   dataMaria: () => ['Maria', 'Love', 'Juliano']
    // }
    //
    // const store = CreateStore(combineReducers(reducers));


//REDUX LIBRARY is used for state management
//it handles the state in a very nice manner
//and very compatible with react framework
//search for redux npm
