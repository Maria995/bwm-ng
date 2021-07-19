

// PURE FUNCTION
// Dont mutate arguments
// No API calls, No calls to the server to fetch data, No route transitions
// Not even random data like Math.random()
//SO: a pure funcion, given the same arguments, would calculate the next State and simply return it


const rentals = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    case 'CREATE_RENTAL':
      return [...state, action.rental];
    default:
      return state;

  }

  // if (action.type === 'FETCH_RENTALS') {
  //   return action.rentals;
  // }
  // else if (action.type === 'CREATE_RENTAL'){
  //   // const rentals = [...state]; //copy by value and not by reference
  //   // rentals.push(action.rental);
  //   // return rentals;
  //   //another way to write it
  //   //
  //   return [...state, action.rental];
  // }
  // else {//return rentalData;
  //  return state;
  // }
}

export default rentals;
