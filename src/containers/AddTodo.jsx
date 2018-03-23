import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

// let AddTodo = ({dispatch}) => {
//     let input 
//     return (
//         <div>
//             <form onSubmit={e => {
//                 e.preventDefault()
//                 if(!input.value.trim()){return}
//                 dispatch(addTodo(input.value))
//                 input.value=''
//             }}>
//                 <input ref={node => {input=node}}/>{'  '}
//                 <button type='submit'>Add Todo</button>
                
//             </form>
//         </div>
//     )
// }


class AddTodo extends React.Component {
    render () {
        let input
        return (
            <div>
                {/* form表单 */}
                <form onSubmit={e => {
                    // 阻止默认事件
                    e.preventDefault()
                    // 判断文本框内容是否为空
                    if(!input.value.trim()){return}
                    // 分发任务
                    this.props.dispatch(addTodo(input.value))
                    // 清空文本框内容
                    input.value=''
                }}>
                     {/* 通过给ref添加回调函数，获取页面中挂载完成后的DOM节点，不能在render方法中访问ref的引用，因为不确定DOM元素是否已经被挂载到页面中  */}
                    <input ref={node => {input=node}}/>{'  '}
                    {/* 点击按钮，自动触发form表单的onSubmit事件 */}
                    <button type='submit'>Add Todo</button>
                    
                </form>
            </div>
        )
    }
}
//将组件和redux中的store进行连接，并返回
AddTodo = connect()(AddTodo)
//导出组件
export default AddTodo