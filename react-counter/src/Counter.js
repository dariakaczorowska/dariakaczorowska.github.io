import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

class Counter extends Component {


    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        }
    }

changeValue = () =>{
        this.setState((preValue) => {
            return ({
                counterValue: preValue.counterValue + 1
            });
        });
    }

clearValue = () => {
    this.setState({counterValue: 0});
    }

previousValue = () => {
    this.setState({counterValue: this.props.initValue});

}

setValue = (newValue) => {
    this.setState({counterValue: newValue});
}



render() {
      console.log(this);
  return (
    <div className="counter">
      Licznik: {this.state.counterValue}
      <ButtonPanel changeCounterValue={this.changeValue} 
      clearCounter={this.clearValue} 
      previousCounter={this.previousValue} />
      <SetValuePanel setCounter={this.setValue} />
    </div>

  );
}
}

export default Counter;
