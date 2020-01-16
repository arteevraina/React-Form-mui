import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from  "material-ui/AppBar";

class Success extends React.Component {

    continue = (event) => {
        event.preventDefault()
        this.props.nextStep()
    }

    back = (event) => {
        event.preventDefault()
        this.props.prevState()
    }

    render() {

        return(
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Success" />
                        <h1>Thank you for your submission</h1>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}



export default Success