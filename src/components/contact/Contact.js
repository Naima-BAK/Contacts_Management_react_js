import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../Context'
import './contact.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showContactToggle: true
    }
    showContact(msg) {
        console.log('hi ', msg);
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }
    onDeleteClick = async (id, dispatch) => {
        try {
            const res = await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    // onDeleteClick = (id, dispatch) => {
    //     axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
    //         .then(res => dispatch({
    //             type: 'DELETE_CONTACT',
    //             payload: id
    //         }))
    //         .catch(err => console.error(err));

    // }
    render() {

        const { id, name, phone, email } = this.props.data;
        return (
            <Consumer>
                {value => {
                    //récupérer dispach from value par ce que value = state qui contient contacts et dispach.
                    const { dispatch } = value;
                    return (

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {name}<svg onClick={this.showContact.bind(this, name)}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className="bi bi-caret-down-fill"
                                        viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>
                                    <Link to={`/edit/${id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" style={{ float: 'right', cursor: 'pointer', marginLeft: '10px' }}
                                            height="16" fill="currentColor" className="bi bi-caret-down-fill"
                                            viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>

                                    </Link>

                                    <svg onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{ float: 'right', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>


                                </h4>
                                <div className="card-text">
                                    {(this.state.showContactToggle) ? (
                                        < ul className="list-group">
                                            <li className="list-group-item">{phone}</li>
                                            <li className="list-group-item disabled">{email} </li>
                                        </ul>) : null}
                                </div>
                            </div>
                        </div >
                    )


                }
                }
            </Consumer >
        )

    }
}
Contact.defaultProps = {
    name: "my name",
    phone: "0000",

}
Contact.propTypes = {
    // name: PropTypes.string,
    // phone: PropTypes.string,
    data: PropTypes.object.isRequired,
}


export default Contact;