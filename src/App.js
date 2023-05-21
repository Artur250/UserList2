import React from 'react'
import './App.css';
import User from './components/Users/Users';

const users = [
  {
    id:1,
      
      name: 'Рауль',
   
  },
  {
    id:2,
  
      name: 'Эмыр',
  
  },
  {
    id:3,
      
      name: 'Эрамыр',
     
  },
  {
    id:4,
      
      name: 'Бекмерзё',
      
  },
]


function App() {
  return (
    <div className="app">
      {users.map(users => (
        <User
        key={users.id}
          name={users.name}
          
        />
      ))}
    </div>
  );
}

export default App;
