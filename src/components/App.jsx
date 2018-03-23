import React from 'react'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'
import Footer from './Footer.jsx'
// const App = () => {
//     // 控制台多行输出console
//     /* 
//     > TodoList
//         > By jiali.zhao
//             欢迎光临! 
//     */
//     // console.groupCollapsed('TodoList')
//     //     console.groupCollapsed('By jiali.zhao')
//     //         console.log('欢迎光临!')
//     //     console.groupEnd()
//     // console.groupEnd()
//     return (
//         <div>
//             <AddTodo/>
//             <VisibleTodoList/>
//             <Footer/>
//         </div>
//     )
// } 

export default class App extends React.Component {
    componentDidMount() {
        console.groupCollapsed('TodoList')
            console.groupCollapsed('By jiali.zhao')
                console.log('欢迎光临!')
            console.groupEnd()
        console.groupEnd()
    }
    render () {
        return (
            <div>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        )
    }
}