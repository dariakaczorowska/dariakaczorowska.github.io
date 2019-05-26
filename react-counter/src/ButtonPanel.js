import React from 'react';

const ButtonPanel = (props) => {

    console.log(props);
    return (
    <div className='button-panel'>
    <button onClick={props.changeCounterValue}>Dodaj 1</button>

    </div>
    );
}

export default ButtonPanel;
