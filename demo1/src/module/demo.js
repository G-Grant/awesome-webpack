import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component{
    render(){
        return (
            <div>This is a box</div>
        )
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));