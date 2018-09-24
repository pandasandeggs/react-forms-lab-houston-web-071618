import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      messageText: "",
      charactersRemaining: this.props.maxChars
    });
  }

  handleChange = (event) => {
    this.setState({
      messageText: event.target.value,
      charactersRemaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="messageText" value={this.state.messageText}/>
        <p>Characters Remaining: {this.state.charactersRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
