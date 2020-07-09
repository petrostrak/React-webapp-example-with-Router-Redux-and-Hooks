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
const sortByAmount = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'amount'
});
// SORT_BY_AMOUNT
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
}); 
// SET_START_DATE
const setStartDate = (startDate = undefined) =>({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

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
        case 'SORT_BY_AMOUNT' : return {...state, sortBy: action.sortBy}
        case 'SORT_BY_DATE'   : return {...state, sortBy: 'date'} // alt method
        case 'SET_START_DATE' : return {...state, date: action.startDate}
        case 'SET_END_DATE'   : return {...state, date: action.endDate} 
        default: return state;
    }
};

//Get visible expenses
const getVisibleExpenses =  (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' ||expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne   =store.dispatch(addExpense({description:'Rent', amount:3000}))
const expenseTwo   =store.dispatch(addExpense({description:'Movies', amount:2000, note:"Don't go to Twilight!"}))
// const expenseThree =store.dispatch(addExpense({description:'Super market', amount:45}))
// const expenseFour  =store.dispatch(addExpense({description:'Wow Subscription', amount:12.99}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500} ))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

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
