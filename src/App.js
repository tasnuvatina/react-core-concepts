import React,{ useEffect, useState } from 'react';
import './App.css';

let Heroes=["Tom Cruise","Tom Hanks","Jason Satham","Brad Pitt"]
let products = [
  { name: "Photoshop", price: "50.99$" },
  { name: "Illustrator", price: "100.99$" },
  { name: "PDF", price: "10.99$" },
  { name: "PDF", price: "10.99$" }
];

function Product(props) {
  let productStyle={
    backgroundColor:"darkgray",
    borderRadius:"5px",
    padding:'20px',
    margin:"10px",
    
  }
  return (
    <div style={productStyle}>
      <h3>Name:{props.name}</h3>
      <h2>Price:{props.price}</h2>
      <button>Buy Now</button>
    </div>
  );
  
}

function Counter() {
  const[count,setCount]=useState(0);
  // const HandleIncrease = ()=>setCount(count+1);
  
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onMouseOver={()=>setCount(count+1)}>Increse</button>
      <button onClick={()=>setCount(count-1)}>Decrese</button>
    </div>
  )
}

function User() {
  const[users,setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))},[]
  )
  return (
    <div>
      <h1>Dynamic User:{users.length}</h1>
      {
        users.map(user=><li>{user.name} ----- {user.email}</li>)
      }
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ backgroundColor: "blueviolet" }}>I am a React Person</h1>
        <Counter></Counter>

        <User></User>

        <ul>
          {Heroes.map((hero) => (
            <li>{hero}</li>
          ))}
        </ul>

        {products.map((product) => {
          return <Product name={product.name} price={product.price}></Product>;
        })}
      </header>
    </div>
  );
}


export default App;
