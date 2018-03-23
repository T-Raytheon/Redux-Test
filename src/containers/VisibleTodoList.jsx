import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList.jsx'

// 根据传入的
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED': 
            // filter：筛选出条件满足的项，并返回 
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            // filter：筛选出条件满足的项，并返回 
            return todos.filter(t => !t.completed)
    }
}

//将todos绑定到props属性中
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// 将onTodoClick方法绑定到props属性中
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}


//将组件和方法联系起来并返回。
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

// 导出该容器组件
export default VisibleTodoList