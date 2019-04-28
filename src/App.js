import React, { Component } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  // Set initial state
  state = {
    topScore: 0,
    score: 0,
    message: "Click an image to begin!"
  };

  updateMessage = (newMessage) => {
    // Update current message
    this.setState({
      message: newMessage
    });
  };

  updateCurrentScore = (newScore) => {
    // Update current score
    this.setState({
      score: newScore
    });
  };

  updateTopScore = (newTopScore) => {
    // Update top score
    if (newTopScore > this.state.topScore) {
      this.setState({
        topScore: newTopScore
      })
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header/>
        <CardContainer updateMessage={this.updateMessage} updateCurrentScore={this.updateCurrentScore}
          updateTopScore={this.updateTopScore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
