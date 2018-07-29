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
			formData: []
		};
		this.toggle = this.toggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggle = this.toggleModal.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
		console.log('object input', event.target.value)
	}


	handleSubmit(event) {
		event.preventDefault();
		if (this.state.name) {
			let object = []
			object.name = this.state.name;

			console.log('name:', object)

			this.setState({
				formValid: true,
				formData: object
			})
		}
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

	render() {
		return (

			<div className='App'>
			<Navigation modal={this.state.modal}
			isOpen={this.state.isOpen}
			handleSubmit={this.handleSubmit.bind(this)}
			handleChange={this.handleChange.bind(this)}
			toggle={this.toggle.bind(this)}
			toggleModal={this.toggleModal.bind(this)}/>
			<DataTable formData={this.state.name}
			formValid={this.state.formValid}/>
			</div>
			);
	}
}

export default App;
