import { useState } from "react";

const App = () => {
  // state
  const [text, setText] = useState();

  return (
    <>
      <button>BUTTON</button>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
      />
      <span>{text}</span>
    </>
  );
};

export default App;
