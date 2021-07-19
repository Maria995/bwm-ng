
import React from 'react';


//remove vrackets because it takes only one parameter
//export const capitalize = (value) => {
export const capitalize = value => {
  if(!value || typeof value !== 'string') { return '';}
  debugger
  return value
  .split(' ') // ["san" , "francisco"]
  .map(word => word[0].toUpperCase() + word.slice(1)) // ["San", "Francisco"]
  .join(' ')  // "San Francisco"
  debugger

}
