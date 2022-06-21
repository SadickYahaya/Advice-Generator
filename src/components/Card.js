import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Quote from './Quote';
import '../Styles/Card.css'

const Card = () => {
    const [quote, setQuote] = useState('');

    const quoteApi = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get('https://api.quotable.io/random');
            arrayOfQuotes = data.data
        } catch (error) {
            console.log(error.message)
        }

        try {
            setQuote(arrayOfQuotes.content)
        } catch (error) {
            console.log(error.message)
        }
    };

    useEffect(() => {
        quoteApi();
    }, [])

    const randomNumber = (number) => {
        number = Math.floor(Math.random() * 999);
        return number;
    }

    return (
        <div className='card'>
            <h5>Advice #{randomNumber()}</h5>
            <Quote quote = {quote}/>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            <div className='dice'>
            <button onClick={quoteApi}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
            </div>
        </div>
    )
}

export default Card;