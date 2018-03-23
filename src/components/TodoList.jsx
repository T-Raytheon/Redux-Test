import React from 'react'
import Todo from './Todo.jsx'

const TodoList = ({todos, onTodoClick}) => {
    // console.log(todos)
    return (
        <div>
            <ul>
                {/* 循环渲染li列表 */}
                {todos.map(todo => 
                    <Todo
                        // 循环渲染一定要有key 
                        key={todo.id}
                        // ES6语法，将todo中的每一项属性进行绑定。
                        {...todo}
                        // 点击事件
                        onClick={() => onTodoClick(todo.id)} />
                )}
            </ul>
        </div>
    )
}

export default TodoList