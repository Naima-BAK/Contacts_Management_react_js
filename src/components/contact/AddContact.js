import React, { Component } from 'react'
import InputGroup from '../../helpers/InputGroup'
import { Consumer } from '../Context'
import { withRouter } from 'react-router'
import axios from 'axios'
class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }


    OnchangeInput = (e) => this.setState({
        //chaque input à une  propriete name 
        [e.target.name]: e.target.value
    })
    submit = async (dispatch, size, e) => {
        //preventDefault pas de refrech
        e.preventDefault();
        const { name, phone, email } = this.state;


        if (name == "") {
            this.setState({ errors: { name: "name is required!" } });
            return;
        }
        if (email == "") {
            this.setState({ errors: { email: "email is required!" } });
            return;
        }
        if (phone == "") {
            this.setState({ errors: { phone: "phone is required!" } });
            return;
        }

        const newContact = {
            name,
            phone,
            email
        }
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            dispatch({
                type: 'ADD_CONTACT',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
        // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        //     .then(res => dispatch({
        //         type: 'ADD_CONTACT',
        //         payload: res.data
        //     })

        //     )
        //     .catch(err => console.error(err));


        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        // return <Navigate to="/" />;
        // navigate('/', { replace: true });


        this.props.history.push('/');
    }
    render() {

        const { name, phone, email, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    //récupérer dispach from value par ce que value = state qui contient contacts et dispach.
                    const { dispatch } = value;
                    return (

                        <div>

                            <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="cart-title">Add contacts</h3>
                                        <div className="card-text">

                                            <InputGroup
                                                label="Name"
                                                name="name"
                                                type="text"
                                                value={name}
                                                onChange={this.OnchangeInput}
                                                errors={errors.name}
                                            />

                                            <InputGroup
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={this.OnchangeInput}
                                                errors={errors.email}
                                            />

                                            <InputGroup
                                                label="Phone"
                                                name="phone"
                                                type="text"
                                                value={phone}
                                                onChange={this.OnchangeInput}
                                                errors={errors.phone}
                                            />
                                            <button className="btn btn-success btn-block">Add</button>
                                        </div >
                                    </div >
                                </div >
                            </form >
                        </div >
                    )


                }}
            </Consumer>
        )

    }

}

export default withRouter(AddContact);
