import { useState } from 'react';
import './App.css';

// import HomePage from './pages/home_page.tsx';

function App() {
  function handleClick() {
    setCount((prev) => prev + 2);
  }
  const [count, setCount] = useState<number>(0);

  console.log('setcount', setCount);

  return (
    <div>
      hellow g,{count}
      <button onClick={handleClick} type="button">
        Click me
      </button>
    </div>
  );
}

export default App;
