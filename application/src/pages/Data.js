import React from 'react';
import {useEffect, useState} from 'react';

function Data() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/machines')
        // fetch('/api/machines')   // This line suppose to work with setupProxy.js file. but it doesn't. So the above line works fine
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setPosts(jsonData) 
        });

    }, []);

    return (
        <div className='machine-data-container'>
            <h2>Data from database</h2>
            <ul>
                {
                    posts.map(post => <li key={post.machineID}>{post.machineID}</li>)
                }
            </ul>
        </div>
    )

}

export default Data;