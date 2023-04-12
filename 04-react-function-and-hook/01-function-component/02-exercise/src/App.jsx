import React from "react";

function App() {
  const [temperature, setTemperature] = useState(35);
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temperature}</p>
    </header>
  );
}

function Content() {
  return (
    <main>
      <Temperature />
    </main>
  );
}

function Temperature() {
  return (
    <div id="temperature">
      <span>{temperature} Oc</span>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <button>Up</button>
      <button>Down</button>
    </footer>
  );
}

export default App;
