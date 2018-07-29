import React from 'react';
import './Navigation.css';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter,
	Form, FormGroup, Label, Input } from 'reactstrap';

const Navigation = (props) => {
	const externalCloseBtn = <button className='close' style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={props.toggle}>&times;</button>;

	return (
		<div>
			<Navbar className='navColor' light expand='md'>
				<NavbarBrand className='navText' href='/'>MyTech</NavbarBrand>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<Button style={{ backgroundColor: '#682b8d' }}
							onClick={props.toggle}>
							<i className='plusText fas fa-plus'> </i>
							Add Hours</Button>
						<Modal 
							isOpen={props.modal}
							toggle={props.toggle}
							className={props.className}
							external={externalCloseBtn}>
							<ModalHeader className='navColor'>Timesheet</ModalHeader>
							<ModalBody>
								<Form onSubmit={props.handleSubmit}>
									<FormGroup>
										<Label>Name:</Label>
										<Input value={props.name} onChange={props.handleChange} type='text' placeholder='Enter your name' name='name' />
									</FormGroup>
									<FormGroup>
										<Label>Name:</Label>
										<Input value={props.date} onChange={props.handleDateChange} type='date' placeholder='Enter the date' name='name' />
									</FormGroup>
									<ModalFooter>
										<Button className='navColor'>Submit</Button>
										<Button color='danger' onClick={props.toggle}>Cancel</Button>
									</ModalFooter>
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
	);
}
export default Navigation;