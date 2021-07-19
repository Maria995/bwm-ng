


import React from 'react';
import { StateContext } from './Provider';

const connect = selectState => Component => {
  class Connect extends React.Component {

    constructor(props, context) {
      super(props);
      debugger
      this.state = {
        slice : selectState(context.getState())
      }

      //this function will be executed everytime there will be changes in your Store
      //so anytime we update state and return a new state, our function below will be executed and
      //we can get here the newest state
      this.unsubscribe = context.subscribe(() => this.handleStateChange(context));

    }

    componentWillUnmount () {
      this.unsubscribe ();
    }

    handleStateChange = (context) => {
      //debugger  //this debugger shows you that this fuction handles adding / create a new rental
      //it is called here why? because this.unsubscribe is calling it ==> on state update
      const rootState = this.context.getState();
      this.setState({slice: selectState(rootState)})
    }


    render() {
      const { dispatch } = this.context;
      const { slice } = this.state;
      return <Component {...slice} dispatch={dispatch}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}



export default connect;
