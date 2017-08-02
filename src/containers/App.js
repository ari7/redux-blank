import React, { Component } from 'react';
import { connect } from 'react-redux'
import HelloButton from '../components/HelloButton'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App-header">
          <h2>Welcome to Redux</h2>
        </div>
        <p className="App-intro">
          Hello
        </p>
        <p>
          <textarea rows="20" cols="70" spellCheck="false"
                    value={ this.props.messages.join('\n') } />
        </p>
        <p>
          <HelloButton onClick={this.handleButtonClick}/>
        </p>
      </div>
    );
  }

  handleButtonClick = (e) => {
    let time = (new Date()).toISOString()
    this.props.dispatch({
      type: 'ADD_MESSAGE',
      message: `Hello from redux-blank. It's ${time}`
    })
  }
}

function mapStateToProps({ messages }) {
  console.log('mapStateToProps messages:', messages)
  return { messages }
}

export default connect(
  mapStateToProps
)(App)
