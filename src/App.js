import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";
import Friends from "./pages/Friends";
import InputRecipe from "./pages/InputRecipe";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/inputrecipe" component={InputRecipe} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
