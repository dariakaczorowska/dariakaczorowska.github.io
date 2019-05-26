import React, {Component} from 'react';

/*const SetValuePanel = (props) => {
    let objInput = null;
    console.log(objInput);
 
    return (
     <div className='set-value-panel'>
    <input type='number' ref= {input => objInput = input}/>
    <button onClick={() => {props.setCounter(parseInt(objInput.value))}}>Ustaw</button>

    </div>
    );
} */


class SetValuePanel extends Component {

    setNewValue = () => {
        this.setCounter(parseInt(this.objInput.value))
    }

    render() {
        return(
     <div className='set-value-panel'>
    <input type='number' ref= {input => this.objInput = input}/>
    <button onClick={() => {this.setNewValue()}}>Ustaw</button>
    </div>

    );
    }
}

export default SetValuePanel;