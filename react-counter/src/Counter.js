import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';

class Counter extends Component {


    constructor() {
        super();

        this.state = {
            counterValue: 33
        }
    }

    changeValue = () =>{
        this.setState((preValue) => {
            return ({
                counterValue: preValue.counterValue + 1
            });
        });
    }


  render() {
      console.log(this);
  return (
    <div className="counter">
      Licznik: {this.state.counterValue}
      <ButtonPanel changeCounterValue={this.changeValue}/>
    </div>

  );
}
}
export default Counter;
