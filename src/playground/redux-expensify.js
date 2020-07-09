import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses = [{
        id:001,
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