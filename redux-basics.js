//Import Dependencies (Different In React)
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}



//Reducer (Needed to update State)
//Cannot do state.counter++ because this is not immutable, it changes the original state

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}



//Store (Dependent on Reducer)
const store = createStore(rootReducer);
console.log(store.getState());



//Subscription - function which will be activated, whenever state is updated - when action reaches reducer
store.subscribe(() => {
    console.log('Subscription: ', store.getState());
});



//Dispatching Action (Can add other arguments, but must have 'type')
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


