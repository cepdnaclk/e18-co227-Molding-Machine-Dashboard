import React from 'react';
import {useEffect} from 'react';

function Data() {

    useEffect(() => {
        fetch('http://localhost:3001/api/machines')
        // fetch('/api/machines')   // This line suppose to work with setupProxy.js file. but it doesn't. So the above line works fine
        .then(results => results.json())
        .then(jsonData => console.log(jsonData))
    }, []);

    return (
        <div className='machine-data-container'>
            <h2>Data from database</h2>
        </div>
    )

}

export default Data;