import React from 'react'

const Todo = ({onClick, completed, text}) => {
    return (
        <li 
            // 点击事件 
            onClick={onClick}
            // 根据传入的completed切换样式
            style={{textDecoration: completed ? 'line-through': 'none'}}>
            {/* 显示li的内容 */}
            {text}
        </li>
    )
}

export default Todo