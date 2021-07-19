


import React, { useEffect } from 'react';
//import CounterApp from './CounterApp';


const generateColor = () => {

  return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);

}

// It will get only re-rendered when props are changed
const CounterView = (props) => {

  const {countValue, handleIncrement} = props;


    useEffect ( () => {
      console.log('USE EFFECT from CounterView');
    }, [countValue])


  return (
    <div style={ {background: generateColor()}}>
      <h1 className="value">{countValue}</h1>
      <button onClick={handleIncrement(1)}>Increment</button>
      <button onClick={handleIncrement(-1)}>Decrement</button>
    </div>
  )

}

export default React.memo(CounterView);
