import React from "react"
import FormUserDetails from "./FormUserDetails"

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

    handleChange = (event) => {
        this.setState({
            firstName: event.target.value,
            lastName: event.target.value,
            email: event.target.value,
            occupation: event.target.value,
            city: event.target.value,
            bio: event.target.value
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
                    <h1>Personal Details</h1>
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