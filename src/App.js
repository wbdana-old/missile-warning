import React from 'react';
import { Header, List } from 'semantic-ui-react'
import Warning from './Warning'
import './App.css';

class App extends React.Component {
  state = {
    toggle: false,
    count: 0,
    fire: false
  }

  toggleOn = (event, data) => {
    this.setState({
      ...this.state,
      toggle: true,
      count: this.state.count + 1
    })
  }

  toggleOff = (event, data) => {
    this.setState({
      ...this.state,      
      toggle: false,
      count: this.state.count + 1
    })
  }

  fire = (event, data) => {
    this.setState({
      ...this.state,
      fire: true
    })
  }

  render() {
    return (
      <div className="App">
        {(this.state.fire == false && this.state.count < 10) && <div className='Home'>
          <Header size='large'>Missile Alert System</Header>
          <Header size='medium'>TOP SECRET</Header>

          <p>Click on your selected option:</p>        

          <List ordered id='List'>
            {this.state.toggle == false && <List.Item onClick ={this.toggleOn} >*TEST* Missile Warning Test</List.Item>}
            <List.Item id="Red" onClick={this.fire} >*REAL* Missile Warning - BE VERY CAREFUL!</List.Item>
            {this.state.toggle == true && <List.Item onClick ={this.toggleOff} >*TEST* Missile Warning Test</List.Item>}
          </List>
        </div>}

      {(this.state.count >= 10 || this.state.fire == true) && <Warning />}

      </div>
    );
  }
}

export default App;
