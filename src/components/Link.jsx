import React from 'react'

const Link = ({active, children, onClick}) => {
    if(active){
        // console.log('children ' + children, ' active ' + active)
        return <span>{children}</span>
    }
    return (
        <a href="#" 
        // 点击事件
        onClick={e => {
            // 阻止默认事件
            e.preventDefault()
            onClick()
        }}>
            {children}
        </a>
    )
}

export default Link