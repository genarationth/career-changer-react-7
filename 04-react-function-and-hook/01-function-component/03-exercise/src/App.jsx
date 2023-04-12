import React from "react";

// const { name, setName } = useState("Your Name");
// const { bio, setBio } = useState("Your Short Bio");
const name = "Pan";
const bio = "my bio";

const App = () => {
  return (
    <div id="root">
      <img src="#" />
      <Info />
      <Social />
    </div>
  );
};

const Info = () => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

const Social = () => {
  return (
    <div>
      <a href="your FB"></a>
      &nbsp;
      <a href="your Twitter"></a>
    </div>
  );
};

export default App;
