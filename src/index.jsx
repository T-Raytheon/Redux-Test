import React from 'react'
import { render } from 'react-dom'
//导入需要使用的redux关键字
import { createStore, applyMiddleware } from 'redux'
//导入react-redux
import { Provider } from 'react-redux'
//处理Object.assign兼容性问题
import 'core-js/fn/object/assign'

import App from './components/App.jsx'

//导入打印日志的中间件
import {createLogger} from 'redux-logger';
const logger = createLogger();
//导入异步操作的中间件
import thunk from 'redux-thunk';
//导入异步操作的另一种中间件
import promiseMiddleware from 'redux-promise';

//导入rootReducers
import rootReducer from './reducers/index'
//导入自定义css样式
import styles from './css/index.scss'
//导入antd的css样式库
import '../node_modules/antd/dist/antd.min.css'


/* 项目结构

actions--->用户行为

components--->组件

containers--->容器

reducer--->   store里面负责分发action行为

index.html ---> 模板文件

server.js---> 构建项目相关配置文件

webpack--->  打包配置文件 */



//初始化一个store对象
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promiseMiddleware, logger)
);

//渲染页面
render(
    <div className='app'>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
    ,
    document.getElementById('app')
)