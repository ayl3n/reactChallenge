import React, { useState } from 'react';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product A', quantity: 0, price: 10.00 },
    { id: 2, name: 'Product B', quantity: 0, price: 20.00 },
  ]);

  const increaseQuantity = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

    
  return (
    <div className="App">
      <table className= "inventory-table">
        <thead>
          <tr className='table-elem'>
            <th>Cantidad</th>
            <th>Descripcion</th>
            <th>Subtotal</th>
            <th>Total</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} >
              <td>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price*item.quantity).toFixed(2)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
