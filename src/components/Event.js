import React from 'react';
import '../App.css';

class Event extends React.Component {
  render () {
    return (
      <div className="event">
        <div className="event\_inner">
          <h1 className='header'>Add Event</h1>
          <div className='input'>
              <input />
          </div>
          <div className='submit'>
          <button onClick={this.props.closeEvent}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
