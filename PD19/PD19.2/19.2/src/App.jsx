import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('First Text');

  const changeText = () => {
    setText('New text');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Button</button>
    </div>
  )
}

export default App
