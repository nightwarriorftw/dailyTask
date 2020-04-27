import React, { Component } from 'react'
import TodoList from './TodoList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='ui container'>
                    <div>Daily Tasks</div>
                    <TodoList />
            </div>
         )
    }
}
