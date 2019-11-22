import React from 'react';

class Pile {
	constructor() {
		let pile = [];
		
		this.state = {
			pile: pile
		}
	}

	empile(value) {
		this.state.pile.push(value);
	}

	clear() {
		this.state.pile = [];
	}

	drop() {
		this.state.pile.prop();
	}

	swap() {
		let lengthPile = this.state.pile.length;
		let lastItem = this.state.pile[lengthPile];
		let beforeLastItem = this.state.pile[lengthPile - 1];

		this.state.pile[lengthPile] = beforeLastItem;
		this.state.pile[lengthPile - 1] = lastItem;
	}

}

export default Pile;