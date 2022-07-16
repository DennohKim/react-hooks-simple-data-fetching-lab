import React, { useState, useEffect } from 'react';
// import { server } from "../mocks/server";

const API_URL = "https://dog.ceo/api/breeds/image/random"
const App = () => {
    const [ message, setMessage ] = useState(null);

    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setMessage(data.message))
        
    }, [])

    if(!message){
        return <p>Loading...</p>
    }
  return (
    <div>
        <h2>Here is a Dog</h2>
        <img src={message} alt="A Random Dog" />
    </div>
  )
}

export default App;
