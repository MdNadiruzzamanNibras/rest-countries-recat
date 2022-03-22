import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
 
function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries]=useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=> setCountries(data))
//   },[])
//   return(<div>
//     <h2>Visiting in the whole world</h2>
//     <h3>{countries.length}</h3>
//     {countries.map(country=> <p>{country.name.common}</p>)}
//   </div>)
// }
export default App;
