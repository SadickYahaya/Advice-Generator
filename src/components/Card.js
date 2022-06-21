import React from 'react'

import Quote from './Quote';
import '../Styles/Card.css'

const Card = () => {
    return (
        <div className='card'>
            <h4>Advice #117</h4>
            <Quote quote = 'It is easy to sit up and take notice, whats difficult is getting up and taking action'/>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
    )
}

export default Card;