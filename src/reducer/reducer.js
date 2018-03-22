import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const reducer = (state = {
    count: 0,
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);





const initialState = {
  display: 'none'
};

const reducerCounter = (state = initialState, action)=> {

  switch(action.type){
    case 'DISPLAY' : 
    console.log(state.display);
    return Object.assign({}, state, {
        display:'block'})
    default :
    return state;
    // console.log('yo');
  }
}

const store = createStore(reducerCounter); 

export default store;