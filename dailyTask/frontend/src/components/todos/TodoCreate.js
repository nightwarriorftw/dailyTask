import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../actions/todos';
import TodoForm from './TodoForm';


class TodoCreate extends Component {
    render() {
        return (
            <div style={{ marginTop: '2em' }}>
                <TodoForm destroyOnUnmount={false} onSubmit={this.onSubmit} />                
            </div>
        )
    }
}

export default connect(
    null,
    {addTodos}
)(TodoCreate);
