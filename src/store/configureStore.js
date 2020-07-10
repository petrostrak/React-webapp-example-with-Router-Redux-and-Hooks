import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//CombineReducers() function takes an object as parameter with key-pair values.
//The key is the root state name and the pair would be the Reducer that is
//responsible to manage it 

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )
    return store;
} 