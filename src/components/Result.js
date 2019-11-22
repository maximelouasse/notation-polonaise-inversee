import React, { Component } from 'react';

class Result extends Component {
	render() {
		return 	(
			<div className="calculator-screen">
				<ul>
					{ this.props.pile.map((item, index) => (
						<li key={index}>{ item }</li>
					)) }
					<li>{ this.props.saisies }</li>
				</ul>
				<div style={{clear: 'both'}}></div>
			</div>
		)
	}
}

export default Result;