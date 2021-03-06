import React from 'react'
import FilterLink from '../containers/FilterLink.jsx'

const Footer = () => {
    return (
        <div>
            {'Show： '}
            <FilterLink filter='SHOW_ALL'>ALL</FilterLink>
            {'  '}
            <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
            {'  '}
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        </div>
    )
}

export default Footer