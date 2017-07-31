import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}

	changeCurrentFilter = (event) => {
	  console.log('new filter: ', event.target.value);
	  this.setState({
		currentFilter: event.target.value
	  })	
	}

	render(){
		return(
			<FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} changeCurrentFilter={this.changeCurrentFilter}/>
			)
	}
}

export default App;
