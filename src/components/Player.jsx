import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState('');
  const nameInput = useRef();
  const handleClick = function(){
    setName(nameInput.current.value);
    nameInput.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref={nameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
