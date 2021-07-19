
import React, {useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';

import CounterView from './CounterView';

//set is an object that keeps only unique data
const functions = new Set();


const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const [whatever, setWhatever] = useState(10);


  //const title = props.title;
  //is equivalent to
  const {title} = props;
  // const increment = (step) => {
  //   setCount(count + step);
  // }

  useEffect ( () => {
    console.log('Calling USE EFFECT ' + count);
  }, [count])

  //commented before adding the callBack so functions will only be called when changed
  // const increment = (step) => () => setCount(count + step)
  // const doWhatever = () => setWhatever(whatever + 1);

  const increment = useCallback((step) => () => setCount(count + step), [count])
  const doWhatever = useCallback(() => setWhatever(whatever + 1), [whatever])

  //every time increment and doWhatever functions are created, I will push them into functions like below:
  functions.add(increment);
  //functions.add(doWhatever);

  return (
    <div className="counter-app">
      <h1> { title } </h1>
      <CounterView
        countValue={count}
        handleIncrement={increment}
      />
      <button onClick={doWhatever}>Do whatever</button>
      <h1>Functions: {functions.size}</h1>
    </div>
  )


//class component
// class CounterApp extends React.Component {
//
//   constructor() {
//     super(); //this is the contstructor of the React.Component
//     //this.increment = this.increment.bind(this);
//     //this.decrement = this.increment.bind(this);
//
//     this.state = {
//       count: 99
//     }
//   }
//
//
//   increment = (step) => {
//     this.setState({
//       count: this.state.count + step
//     })
//   }
//
// // Lifecycle function = one of the first functions called when your component is displayed
//   render() {
//     //const count = this.state.count
//     //if variable name and property name is the same you can wrap it into curly brackets
//     const { count } = this.state;
//     const { title } = this.props;
//
//
//     return (
//       <div className="counter-app">
//         <h1> {title} </h1>
//         <CounterView
//           countValue={count}
//           handleIncrement={increment}
//         />
//       </div>
//     )
//   }


}

 CounterApp.propTypes = {
   title: PropTypes.string.isRequired
 }




export default CounterApp;
