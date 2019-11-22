import React, { Component } from 'react';

class KeyPad extends Component {
	render() {
		return 	(
			<div>
				<div className="col-xl-12">
					<button type="button" className="btn btn-info" name="CLEAR" onClick={e => this.props.onClick(e.target.name)}>CLEAR</button>
					<button type="button" className="btn btn-light waves-effect" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
					<button type="button" className="btn btn-light waves-effect" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
					<button type="button" className="btn btn-light waves-effect" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
					<button type="button" className="btn btn-light waves-effect" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
				</div>
				
				<div className="col-xl-12">
					<button type="button" className="btn btn-info" name="SWAP" onClick={e => this.props.onClick(e.target.name)}>SWAP</button>
					<button type="button" className="btn btn-light waves-effect" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
					<button type="button" className="btn btn-light waves-effect" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
					<button type="button" className="btn btn-light waves-effect" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
					<button type="button" className="btn btn-light waves-effect" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
				</div>
				
				<div className="col-xl-12">
					<button type="button" className="btn btn-info" name="DROP" onClick={e => this.props.onClick(e.target.name)}>DROP</button>
					<button type="button" className="btn btn-light waves-effect" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
					<button type="button" className="btn btn-light waves-effect" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
					<button type="button" className="btn btn-light waves-effect" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
					<button type="button" className="btn btn-light waves-effect" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
				</div>
				
				<div className="col-xl-12">
					<button type="button" className="btn btn-info" name="ENTER" onClick={e => this.props.onClick(e.target.name)}>ENTER</button>
					<button type="button" className="btn btn-light waves-effect" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
					<button type="button" className="btn btn-secondary waves-effect" name="." onClick={e => this.props.onClick(e.target.name)}>,</button>
					<button type="button" className="btn btn-light waves-effect" name="-+" onClick={e => this.props.onClick(e.target.name)}>&#177;</button>
					<button type="button" className="btn btn-light waves-effect" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
				</div>
			</div>
		)
	}
}

export default KeyPad;