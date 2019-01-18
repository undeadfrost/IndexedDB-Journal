import React, {Component} from 'react';

class LeftDate extends Component {
  state = {
    currentTime: new Date()
  }

  render() {
    return (
      <h2>{this.state.currentTime.getFullYear()}</h2>
    );
  }
}

export default LeftDate;
