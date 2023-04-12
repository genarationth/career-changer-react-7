// import React, { useState } from 'react';

// function App() {
//   const [choice, setChoice] = useState()

//   const handleClick = (value) => {
//     const
//   };

//   return (
//     <div>
//       <button>Fullname</button>
//       <button>Age</button>
//       <button>Picture</button>
//       <DisplayInfo />
//     </div>
//   );
// }

// function DisplayInfo(props) {

//   let ___;
//   if (___ === 'Fullname') {
//     ___ = <h2>John Doe</h2>;
//   } else if (___ === 'Age') {
//     ___ = <h2>30</h2>;
//   } else if (___ === 'Picture') {
//     ___ = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
//   } else {
//     ___ = <p>Please select an option.</p>;
//   }

//   return (
//     <div>
//       {___}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  // adding state here.
  const [choices, setChoices] = useState();

  const handleClick = (value) => {
    setChoices(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {
  let element;
  if (props.choices === "Fullname") {
    element = <h2>John Doe</h2>;
  } else if (props.choices === "Age") {
    element = <h2>30</h2>;
  } else if (props.choices === "Picture") {
    element = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    element = <p>Please select an option.</p>;
  }

  return <div>{element}</div>;
}

export default App;
