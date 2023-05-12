import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../Context';

class Contacts extends Component {

    deleteContact(id) {
        //récupérer les contacts :
        const { contacts } = this.state;
        //supprimer le id du paramétre
        const newListeContact = contacts.filter((contact) => contact.id !== id)
        //modifier les contacts
        this.setState({
            contacts: newListeContact
        })


    }
    render() {
        return (
            <Consumer>
                {value => (
                    <div>
                        {/* value contient le state */}
                        {value.contacts.map(
                            (contact) => (
                                <Contact key={contact.id} data={contact} deleteContactFromChild={this.deleteContact.bind(this, contact.id)} />
                            ))}
                    </div>
                )}
            </Consumer>
        )

    }
}
//exporter pour importer ailleur:
export default Contacts;