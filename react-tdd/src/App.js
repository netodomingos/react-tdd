import './App.css';
import { useState } from 'react'


function App() {
  const [counter, setCount] = useState(0)

  return (
    <div className="App">
     <h1>this is counter app</h1>
     <div>
       <h5 id='counter-value'>{counter}</h5>
     </div>
     <button onClick={() => setCount(counter + 1)} id='increment-btn'>Increment</button>
     <button onClick={() => setCount(counter - 1)} id='decrement-btn'>Decrement</button>
    </div>
  );
}

export default App;
