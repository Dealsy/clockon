import React from 'react';
import './Navigation.css';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter,
	Form, FormGroup, Label, Input } from 'reactstrap';

class Navigation extends React.Component {
	state = {
		name: ''
	}

	change = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state)
		this.setState({
			name: ''
		})
		this.props.toggle(this.state)
	};

	render() {
		const externalCloseBtn = <button className='close' style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.props.toggle}>&times;</button>;
		return(

			<div>
				<Navbar className='navColor' light expand='md'>
					<NavbarBrand className='navText' href='/'>MyTech</NavbarBrand>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<Button style={{ backgroundColor: '#682b8d' }}
								onClick={this.props.toggle}>
								<i className='plusText fas fa-plus'> </i>
								Add Hours</Button>
							<Modal 
								isOpen={this.props.modal}
								toggle={this.props.toggle}
								className={this.props.className}
								external={externalCloseBtn}>
								<ModalHeader className='navColor'>Timesheet</ModalHeader>
								<ModalBody>
									<Form>
										<FormGroup>
											<Label>Name:</Label>
											<Input value={this.state.name}
												onChange={event => this.change(event)}
												 type='text'
												 placeholder='Enter your name'
												 name='name' />
												 <ModalFooter>
											 <Button className='navColor' onClick={event => this.onSubmit(event)}>Submit</Button>
											 <Button color='danger' onClick={this.props.toggle}>Cancel</Button>
											 </ModalFooter>
										</FormGroup>
									</Form>
								</ModalBody>
							</Modal>
						</NavItem>
						<NavItem>
							<NavLink className='navText' href='/'>Logout</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
			

		)
	}
}

export default Navigation;