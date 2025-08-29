import navi from './data/global_navi.json';
import { useState } from 'react';

function App() {
  const [leng, setLeng] = useState("en");

/* *가벼운 화살표로 function 대신 */

  return (
    <div className="App">
      <button onClick={() => setLeng("en")}>영어</button>
      <button onClick={() => setLeng("kr")}>한국어</button>
      <button onClick={() => setLeng("cn")}>중국어</button>
      <ul>
        {
          navi[leng]["menu"].map(
            (v,i) => <li key={i}> { v.text} </li>
          )
        }
      
      </ul>
    </div>
  );
}

export default App;
