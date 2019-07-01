import React, { Component } from 'react';
import Dogs from './components/dogs';

class App extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/hello')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ dogs: data })
        })
        .catch(console.log)
      }

    render() {
      return (
        <Dogs dogs={this.state.dogs} />
      );
    }
}

export default App;
