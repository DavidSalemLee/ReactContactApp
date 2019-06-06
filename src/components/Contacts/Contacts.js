import React, { Component } from 'react';
import { Contact } from './Contact';

import { Consumer } from '../../context';

export class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h3 className="display-4 mb-4">Contact List</h3>
                            {contacts.map(contact => 
                                <Contact key={contact.id} contact={contact} />
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}


