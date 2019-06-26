import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone } = this.state;
        const newContact = {
            name, 
            email,
            phone,
        }; 
        
        // Error for empty name field
        if (name === '') {
            this.setState({...this.state, errors: { name: 'Name is Required' }});
            return;
        }

        // Error for empty email field
        if (email === '') {
            this.setState({...this.state, errors: { email: 'Email is Required' }});
            return;
        }

        // Error for empty phone field
        if (phone === '') {
            this.setState({...this.state, errors: { phone: 'Phone is Required' }});
            return;
        }


        // Post new contact to "database" & Update the state in Context API
        const res = await Axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({ type: 'ADD_CONTACT', payload: res.data });
            

        // Clear the Input fields and state
        this.setState({ name: '', email: '', phone: '', errors: {} });

        // Redirect to Home/Contact List
        this.props.history.push('/');
    }

    render() {
        return (
            <Consumer> 
                {value => {
                    const { name, email, phone, errors } = this.state;
                    const { dispatch } = value;
                    
                    return (
                        <div className="card mb-3">
                            <div className="card-header"><strong>Add Contact</strong></div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)} >
                                    <TextInputGroup 
                                        name="name" 
                                        label="Name"
                                        placeholder="Enter name..."
                                        value={name}
                                        onChange={this.onChange}
                                        errors={errors.name}
                                    />
                                    <TextInputGroup 
                                        type="email"
                                        name="email" 
                                        label="Email"
                                        placeholder="Enter email..."
                                        value={email}
                                        onChange={this.onChange}
                                        errors={errors.email}
                                    />
                                    <TextInputGroup 
                                        name="phone" 
                                        label="Phone"
                                        placeholder="Enter phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        errors={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )    
                }}
            </Consumer>
        )
    }
}

export default AddContact;