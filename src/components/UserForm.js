import React from "react"
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        }
        this.bind = this.nextStep.bind(this)
        this.bind = this.prevState.bind(this)
        this.bind = this.handleChange.bind(this)
    }

    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevState = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => (event) => {   // passing input as parameter
        this.setState({
            [input]: event.target.value
        })
    }
    render() {
        const {step} = this.state
        const {firstName, lastName, email, occupation, city, bio} = this.state
        const values = {firstName, lastName, email, occupation, city, bio}
        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep = {this.nextStep} handleChange={this.handleChange} values={values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails
                        nextStep = {this.nextStep} handleChange={this.handleChange} values={values}
                        prevState={this.prevState}
                    />
                )
            case 3:
                return(
                    <h1>Confirm</h1>
                )
            case 4:
                return(
                    <h1>Success</h1>
                )
        }
    }
}

export default UserForm