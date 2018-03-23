import {connect} from 'react-redux'
import Link from '../components/Link.jsx'
import {setVisibility} from '../actions'

// 将active属性绑定到props属性中
const mapStateToProps = (state, ownProps) => {
    return {
        // visibilityFilter，用于表示当前筛选的种类，比如完成、未完成等等，当前是SHOW_ALL
        active: ownProps.filter === state.visibilityFilter
    }
}

// 将onclick方法绑定到props属性中
const mapDispatchToProps = (dispatch, ownProps) => {    
    return {
        // 通过dispatch去
        onClick: () => {
            // 鼠标点击->设置filter属性->reducer识别dispatch->任务被分发到visibilityFilter.js文件，该reducer返回
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

// 将方法和属性联系起来，并返回
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink