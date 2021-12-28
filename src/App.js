import React from 'react';
import Departament from './components/Departament'
import { Link } from "react-router-dom";

function App(props) {
  const departamentList = props.departaments.map(departament => 
  <Departament 
  id={departament.id} 
  title={departament.title} 
  description={departament.description}
  key={departament.id}
  />);
  return (
    <div className="App">
    
     {departamentList}
     
     
    </div>
  );
}

export default App;