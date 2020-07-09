import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE action
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action)=> {
    switch(action.type){
        case 'ADD_EXPENSE': return [...state, action.expense]
        case 'REMOVE_EXPENSE': return state.filter(({id})=>id !== action.id)
        case 'EDIT_EXPENSE': return state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                };
            };
        });
        default: return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action)=> {
    switch(action.type){
        case 'SET_TEXT_FILTER': return {...state, text: action.text}
        default: return state;
    }
};

//CombineReducers() function takes an object as parameter with key-pair values.
//The key is the root state name and the pair would be the Reducer that is
//responsible to manage it 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState())
})

const expenseOne   =store.dispatch(addExpense({description:'Rent', amount:350}))
const expenseTwo   =store.dispatch(addExpense({description:'Movies', amount:20, note:"Don't go to Twilight!"}))
const expenseThree =store.dispatch(addExpense({description:'Super market', amount:45}))
const expenseFour  =store.dispatch(addExpense({description:'Wow Subscription', amount:12.99}))

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount:500} ))

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

const demoState = {
    expenses : [{
        id:'001',
        description: 'January rent',
        note: 'This was the final payment of this address',
        amount: 34000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //or date
        startDate: undefined,
        endDate: undefined
    }
}
