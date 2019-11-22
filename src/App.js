import React, { Component } from 'react';
import KeyPad from './components/KeyPad';
import Result from './components/Result';
//import Pile from './components/Pile';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			saisies: "",
			pile: [],
			result: 0
		}
	}

	onClick = (value) => {
		if(value === 'CLEAR') {
			this.clear();
		} else if(value === 'ENTER') {
			if(this.state.saisies !== "") {
				this.empile(parseFloat(this.state.saisies));
			}
		} else if(value === 'SWAP') {
			if(this.state.saisies !== "") {
				this.empile(parseFloat(this.state.saisies));
			}

			this.swap();
		} else if(value === 'DROP') {
			this.drop();
		} else if(value === '-+') { 
			this.changeSign();
		} else {
			if(Number.isInteger(parseFloat(value)) || value === ".") {
				this.setState(prevState => ({
					saisies: this.state.saisies + value
				}));
			} else {
				if(this.state.saisies !== "") {
					this.empile(parseFloat(this.state.saisies));
				}

				this.calcule(value);
			}
		}
	}

	render() {
		return (
			<div className="App">
				<div className="calculator card">
					<Result pile={ this.state.pile } saisies={ this.state.saisies }/>
					<KeyPad onClick={ this.onClick }/>
				</div>
			</div>
		)
	}

	empile(value) {
		this.state.pile.push(value);

		this.setState(prevState => ({
			saisies: ""
		}));
	}

	clear() {
		this.setState(prevState => ({
			saisies: "",
			pile: []
		}));
	}

	drop() {
		let tempPile = this.state.pile;
		let tempSaisie = this.state.saisies;

		if(tempSaisie !== "") {
			tempSaisie = "";
		} else if(tempPile.length > 0) {
			tempPile.pop();
		}

		this.setState(prevState => ({
			saisies: tempSaisie,
			pile: tempPile
		}));
	}

	swap() {
		let newPile = this.state.pile;

		let lengthPile = newPile.length;

		if(lengthPile > 1) {
			let lastItem = newPile[lengthPile - 1];
			let beforeLastItem = newPile[lengthPile - 2];

			newPile[lengthPile - 2] = lastItem;
			newPile[lengthPile - 1] = beforeLastItem;

			this.setState(prevState => ({
				pile: newPile
			}));
		}
	}

	changeSign() {
		let tempPile = this.state.pile;
		let tempSaisie = this.state.saisies;
		let lengthPile = tempPile.length;

		if(tempSaisie === "") {
			tempPile[lengthPile - 1] = tempPile[lengthPile - 1] * -1;
		} else {
			tempSaisie = parseFloat(tempSaisie) * -1;
		}

		this.setState(prevState => ({
			saisies: tempSaisie,
			pile: tempPile
		}));
	}

	calcule(value) {
		let tempPile = this.state.pile;
		let lengthPile = tempPile.length;

		if(lengthPile > 1) {
			let lastItem = tempPile[lengthPile - 1];
			let beforeLastItem = tempPile[lengthPile - 2];

			let result = 0;

			if(value === "+") {
				result = lastItem + beforeLastItem;
			} else if(value === "-") {
				result = beforeLastItem - lastItem;
			} else if(value === "*") {
				result = beforeLastItem * lastItem;
			} else if(value === "/") {
				result = beforeLastItem / lastItem;
			}

			tempPile.splice(-2);
			tempPile.push(parseFloat(result));

			this.setState(prevState => ({
				pile: tempPile
			}));
		}
	}
}

export default App;
