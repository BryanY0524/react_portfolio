import React, { Component } from "react";
import './App.css';
import Main from "./components/main";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Modal01 from "./components/modals/modal01";
import Modal02 from "./components/modals/modal02";
import About from "./components/about";
import Skill from "./components/skill";
import Exp from "./components/experience";
import Edu from "./components/education";
import ScrollTopArrow from "./components/scroll_top";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Main></Main>
        </header>
        <ScrollTopArrow></ScrollTopArrow>
        <Intro></Intro>
        <About></About>
        <Skill></Skill>
        <Portfolio></Portfolio>
        <Exp></Exp>
        <Edu></Edu>
        <Modal01></Modal01>
        <Modal02></Modal02>
      </div>
    );
  }
}

export default App;
