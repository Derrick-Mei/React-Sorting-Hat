import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuestionsPage from "./components/questionsPage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true
    };
  }

  handleWelcome = () => {
    this.setState({ displayWelcome: !this.state.displayWelcome });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.displayWelcome ? (
          <button
            style={{ display: this.state.displayWelcome }}
            onClick={this.handleWelcome}
          >
            Click Me!!!
          </button>
        ) : null}

        <button onClick={this.handleWelcome}>Click to go Back</button>
        {/* {!this.state.displayWelcome?<QuestionsPage/>:null} */}
        <QuestionsPage className={this.state.displayWelcome?'basket hide': 'basket'}/>
      </div>
    );
  }
}

export default App;
