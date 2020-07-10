import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) =>(
    <div>
        <p>Expense List</p>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);
