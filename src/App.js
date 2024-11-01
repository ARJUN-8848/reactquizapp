import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Question from './Question';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>React Quiz App</title>
            </Helmet>
            <Question />
        </div>
    );
}

export default App;
