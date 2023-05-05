import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Api from './Api';

function App(){
return (
	<div>
    <header>
    <h1>Meu app em React</h1>
    <p><Link to='/api'>Api</Link></p>
    </header>
		
    <main>
      <Switch>
      <Route path='/api' component= {Api}/>
      </Switch>
    </main>
	</div>
)
}

export default App;
