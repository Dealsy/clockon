import React, { Component } from 'react'
import './App.css'
import DataTable from './components/dataTable/dataTable'
import Navigation from './components/Navigation/Navigation'


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			modal: false,
			name: '',
			date: '',
			formValid: false,
			fields: {}
		};
		this.toggle = this.toggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggle = this.toggleModal.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
		console.log('object input', event.target.value)
	}


	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}


	onSubmit = (fields) => {
		this.setState({ fields })
		console.log('app component', fields)
	}

	render() {
		return (

			<div className='App'>
				<Navigation onSubmit={fields => this.onSubmit(fields)}
					modal={this.state.modal}
					isOpen={this.state.isOpen}
					handleChange={this.handleChange.bind(this)}
					toggle={this.toggle.bind(this)}
					toggleModal={this.toggleModal.bind(this)}/>
				<DataTable
					fields={this.onSubmit.bind(this)}
					formValid={this.state.formValid}/>
				<p> {this.state.fields.name} </p>
			</div>
		);
	}
}

export default App;
