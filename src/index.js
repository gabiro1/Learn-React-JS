import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';

const App = () =>{
    return(
        <Header/>
    ) 
    // return React.createElement('h1', {className:'greet'},'Hello, World')
}

ReactDOM.render(<App/>, document.getElementById('root'))