import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import Axios from 'axios';


export class Contact extends Component {
    state = {
        showContact: false
    };

    clickExpandContact = () => {
        this.setState({ showContact: !this.state.showContact });
    };

    clickDelete = async (id, dispatch) => {
        await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render() {
        return (
            <Consumer>
                { value => {
                    const { id, name, email, phone } = this.props.contact;
                    const { showContact } = this.state;
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3 px-4" >
                            <h5 style={{ marginBottom: 0 }}>
                                {name} 
                                <i className="fas fa-angle-down ml-2" onClick={this.clickExpandContact} style={{ cursor: 'pointer', marginBottom: -10 }} />
                                <i className="fas fa-times float-right" onClick={this.clickDelete.bind(this, id, dispatch)} style={{ cursor: 'pointer', color: 'red' }} ></i>
                            </h5>
                            
                            { showContact ? 
                                (<ul className="list-group mt-3">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>) : null 
                            }
                        </div>
                    )
                }}

            </Consumer>
            
            
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

