// import logo from "./logo.svg";
import "./App.scss";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">{/* <About /> */}</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Nav />
//       </header>
//       <main className="App-main"></main>
//     </div>
//   );
// }
