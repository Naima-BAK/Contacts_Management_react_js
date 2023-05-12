import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

//method reducer:

const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                //... c'est a dire récuperer tous les element de contacts plus cet element
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                //... c'est a dire récuperer tous les element de contacts plus cet element
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            };
        //cas de suppression :
        case 'DELETE_CONTACT':
            return {
                //filtrer les contacts dont contact.id est !==  de contact qu'on veut supprimer:
                //so state contient la liste des contacts filtrer
                //action contient deux attribut type est le type d'action et le pyload contient data 
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };

        default:
            //si on a rien fait (pas de suppression) returner state:
            return state;
    }
}
export class Provider extends Component {

    //state est un objet contient les contacts:
    state = {
        contacts: [
            { id: 1, name: "BAKENCHICH Naima", phone: "061524562", email: "naimabk@gmail.com" },
            { id: 2, name: "BAKENCHICH Elhabib", phone: "061524562", email: "Elhabib@gmail.com" },
            { id: 3, name: "BAKENCHICH Habiba", phone: "061524562", email: "Habiba@gmail.com" }
        ],
        //attribut permet de modifier le state :
        dispatch: action => this.setState(state => reducer(state, action))
    }
    // componentWillMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => this.setState({
    //             contacts: res.data
    //         }))
    //         .catch(err => console.error(err));
    // }

    async componentWillMount() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({
                contacts: res.data
            })
        } catch (e) {
            console.log(e);
        }
    }



    render() {

        return (
            <Context.Provider value={this.state}>
                {/* injectable */}
                {this.props.children}
            </Context.Provider>
        )

    }
}
//variable pour consommer le context
export const Consumer = Context.Consumer
