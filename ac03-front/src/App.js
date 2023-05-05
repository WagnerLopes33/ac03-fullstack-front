import React from "react";

function App(){
return (
	<div>
    <header>
    <p><Link to='/api'>Api</Link></p>
    </header>
		<h1>isso é a pagina</h1>
    <main>
      <Switch>
      <Route path='/api' component= {Api}/>
      </Switch>
    </main>
	</div>
)
}

export default App;

