import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from  "material-ui/AppBar";
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class FormUserDetails extends React.Component {

    continue = (event) => {
        event.preventDefault()
        this.props.nextStep()
    }

    render() {

        const {values} = this.props

        return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Enter User Details" />
                        <TextField hintText="Enter your First Name"
                                floatingLabelText="First Name"
                                onChange={this.props.handleChange}
                                />
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}

export default FormUserDetails