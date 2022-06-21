import React, { useState } from 'react'
import axios from 'axios';

import Card from './components/Card';
import './App.css';

const App = () => {
    const [quote, setQuote] = useState('');

    const quoteApi = () => {
        let arrayOfQuotes = [];
        try {
            const data = axios.get('https://api.quotable.io/random');
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='app'>
            <Card />
        </div>
    )
}

export default App;