import React, { Component } from "react";
import './App.css';
import Main from "./components/main";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Modal00 from "./components/modals/modal00";
import Modal01 from "./components/modals/modal01";
import Modal02 from "./components/modals/modal02";
import Modal03 from "./components/modals/modal03";
import Modal04 from "./components/modals/modal04";
import Modal05 from "./components/modals/modal05";
import Modal06 from "./components/modals/modal06";
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
        <Modal00></Modal00>
        <Modal01></Modal01>
        <Modal02></Modal02>
        <Modal03></Modal03>
        <Modal04></Modal04>
        <Modal05></Modal05>
        <Modal06></Modal06>
      </div>
    );
  }
}

export default App;
