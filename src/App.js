import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import InputRecipe from "./pages/InputRecipe";
import Login from "./pages/Login";
import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/Dashboard/id:/" component={Dashboard} />
          <Route exact path="/Dashboard/id:/search" component={Search} />
          <Route exact path="/Dashboard/id:/friends" component={Friends} />
          <Route exact path="/Dashboard/id:/inputrecipe" component={InputRecipe} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
