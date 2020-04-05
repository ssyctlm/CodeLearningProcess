//this is a `Redux` code sample. there are 5 core principles to create an redux app.

const INCREMENT = "INCREMENT"; // define a constant for increment action types
const DECREMENT = "DECREMENT"; // define a constant for decrement action types
const defaultState = 0; //initializing a state

//Actions:
//An object, in which saves the action's type(name) and some state values.
//We can see `Actions` as an application form whit title request and some basic data by which we ask for changing some stored data

const incAction = () => {
  return { type: INCREMENT, value: 1 };
}; // define an action creator for incrementing
const decAction = () => {
  return { type: DECREMENT, value: 1 };
}; // define an action creator for decrementing

//Reducer:
//A method is defined to grasp state and actions and execute some specific actions according their type;
//We can see `Reducer` as some inner functional departments that receive application forms and decide which form is their job and if it was then they will fetch the saved data from the data management department, updating the data accordingly and return a new data to the data management department.

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default:
      return state;
  }
}; // define the counter reducer which will increment or decrement the state based on the action it receives

//set up `Store`
//A store is an object which holds and manages application state.
//We can see store as a company in which we can found those functional departments that we described above, and we can ask this company for data(state) `store.getStore()`
const store = Redux.createStore(counterReducer);

//acquire data from the store
let state = store.getStore();

// Dispatch an Action Event
//dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
//todo I will figure out what is this method for

store.dispatch(incAction());
store.dispatch({ type: INCREMENT, value: 1 });

//! Redux: Never Mutate State
// Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An array or object, however, is mutable. In practice, your state will probably consist of an array or object, as these are useful data structures for representing many types of information.

//Array.prototype.concat(Array)
//[...Array,'new item']

const newObject = Object.assign({}, obj1, obj2); //Copy an Object with Object.assign

//That is to say, `spread operator` only provides immutable array operations for one-dimensional arrays.
