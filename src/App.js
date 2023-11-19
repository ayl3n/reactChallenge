import React, { useState } from 'react';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Arroz', quantity: 0, price: 100.00 },
    { id: 2, name: 'Gaseosa', quantity: 0, price: 80.00 },
    { id: 3, name: 'Fernet', quantity: 0, price: 150.00},
    { id: 4, name: 'Pan', quantity: 0, price: 25.00},
    { id: 5, name: 'Café', quantity: 0, price: 50.00}
  ]);

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
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

  const calculateTotal = () => {
    const totalItemCount = inventory.reduce((total, item) => {
      return total + item.quantity;
    },0 );
  
    setTotalItemCount(totalItemCount);

    const totalAmount = inventory.reduce((total, item) => total + item.quantity * item.price, 0);
    setTotalPrice(totalAmount);
  };

  React.useEffect(() => {
    calculateTotal();
  }, [inventory]);
  
    
  return (
    <div className="App">
      <table className= "inventory-table">
        <thead>
            <tr className='table-elem'>
            <th>Cantidad</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} >
              <td>
              <button className = 'buttons' onClick={() => {decreaseQuantity(item.id)}}>-</button>
              {item.quantity}
              <button className = 'buttons' onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price*item.quantity).toFixed(2)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <div className='totalQuantity'>
      <table >
      <th>Cantidad de Items: {totalItemCount}</th>
      <th>Precio Total: ${(totalPrice)}</th>
      </table>
      </div>  
    

    </div>
  );
}
export default App;
