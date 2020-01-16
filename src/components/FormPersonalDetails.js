import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from  "material-ui/AppBar";
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class FormPersonalDetails extends React.Component {

    continue = (event) => {
        event.preventDefault()
        this.props.nextStep()
    }

    back = (event) => {
        event.preventDefault()
        this.props.prevState()
    }

    render() {

        const {values, handleChange} = this.props

        return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Enter Personal Details" />
                        <TextField hintText="Enter your Occupation"
                                floatingLabelText="Occupation"
                                onChange={handleChange('occupation')}
                                defaultValue={values.occupation }
                                />
                        <br/>
                        <TextField hintText="Enter your City"
                                floatingLabelText="City"
                                onChange={handleChange('city')}
                                defaultValue={values.city}
                                />
                        <br/>
                        <TextField hintText="Enter your Bio"
                                floatingLabelText="Bio"
                                onChange={handleChange('bio')}
                                defaultValue={values.bio}
                                />
                        <br/>
                        <RaisedButton 
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        <RaisedButton 
                            label="Back"
                            primary={true}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails