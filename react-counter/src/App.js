import React, {Component} from 'react';
import './App.css';

import Counter from './Counter';
import Header from './Header';

class App extends Component {


  render() {
  return (
<div className="App">

      <Header headingText='Aplikacja Counter'/>

      <Counter initValue={33} />

      <Header headingText='Aplikacja Counter wersja 2'/>
      <Counter initValue={105} />


</div>

  );
}
}

export default App;
