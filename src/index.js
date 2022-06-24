import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.css'
class Welcome extends React.PureComponent {
  render() {
    const msg = "Hello React"
    return (
      <header>
        <h1>{ msg }</h1>
      </header>
    );
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
