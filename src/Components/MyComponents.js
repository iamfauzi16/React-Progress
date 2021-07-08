import React from 'react';
import { useState, useEffect } from 'react';

import { Container, Card, Button } from 'react-bootstrap';
import './MyComponents.css';



function MyComponents() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3004/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Container">
          <h1 className="Products-header">Products</h1>
          <br />
          <div className="Products ">
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  < img src= {item.url} />
                  <h3>{item.name}</h3>
                  <h2><span>Harga</span> <br />{item.price}</h2>
                  <p><span>Description</span> <br />{item.description}</p>          
                </li>
              ))}
            </ul>
          </div>
      </div>
    );
  }
}



export default MyComponents;