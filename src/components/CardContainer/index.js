import React, {Component} from 'react';
import ImgCard from "./../ImgCard";
import friends from "./../../friends.json";

class CardContainer extends Component {

  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      score: 0,
      topScore: 0,
      imgs: friends,
      selectedImages: []
    };
  }

  // when the user clicks on an img card
  handleClick = (e) => {
    let id = e.target.id;

    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block

    if (this.state.selectedImages.includes(id)) {
      // Game Over
      this.setState({
        score: 0,
        selectedImages: [],
      });

      // Update the parent's component display
      this.props.updateTopScore(this.state.score);
      this.props.updateCurrentScore(0);
      this.props.updateMessage("Incorrect... Click an image to start again!")

    } else {
      // Keep playing
      this.setState({
        selectedImages: this.state.selectedImages.concat([id]),
        score: this.state.score + 1,
      });

      // Update the parent component's display
      this.props.updateCurrentScore(this.state.score + 1);
      this.props.updateMessage("Correct!!")
    }

    // Shuffle images
    this.setState({
      imgs: this.state.imgs.sort(() => Math.random() - 0.5)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          {friends.map(friend =>
          <ImgCard src={friend.image} key={friend.id} id={friend.id} alt={friend.name}
            handleClick={this.handleClick} />)}
        </div>
      </div>
    );
  }
}

export default CardContainer;