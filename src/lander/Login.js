import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import MuTextField from '@material-ui/core/TextField'
import MUButton from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'


const muStyles = theme => ({
    image: {
        width: '100%',
        height: '100%',
        'background': 'url(background.jpg)',
        'background-position': 'center',
        'background-size': 'contain',
        position: 'absolute'
    },
    paper: {
        position: 'relative',
        'width': '50%',
        height: '500px',
        padding: '20px',
        'text-align': 'center',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        background: 'transparent',
        'box-shadow': 'none'
    },
    parent: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    },
    password: {
        'margin-top': '20px',
        'max-width': '300px'
    },
    button: {
        'margin-top': '20px',
        'max-width': '300px'
    },
    input: {
        'max-width': '300px'
    },
    form: {
        display: 'flex',
        'flex-direction': 'column',
        padding: '30px',
        background: '#dbdedf',
        opacity: '0.91',
        'border-radius': '20px',
        width: '300px'
    },
    error: {
        color: 'red',
        'font-weight': 'bold',
        'margin-bottom': '10px'
    },
    login: {
        'font-size': '22px',
        'font-weight': 'bold',
        'margin-bottom': '20px'
    }
  });

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.login = this.login.bind(this)
    }
    onChange = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    login = () =>{
        const {username, password} = this.state

        if(username === 'kunal' && password === 'innovect'){
            this.props.history.push('articles')
        }
        else{
            this.setState({
                error: 'Invalid username or password'
            })
            throw Error('Invalid username or password')
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <div className={classes.image}/>
                <div className={classes.parent}>
                    <Paper className={classes.paper} elevation={3}>
                        <div className={classes.form}>
                            <div className={classes.login}>LOGIN</div>
                            <span className={classes.error}>{this.state.error}</span>
                            <MuTextField className={classes.input} name='username' onChange={this.onChange} inputProps={{ autocomplete: 'false' }} id="standard-basic" label="Username" />
                            <MuTextField name='password' onChange={this.onChange} type='password' className={classes.password} id="standard-basic" label="Password" />
                            <MUButton onClick={this.login} className={classes.button} variant="contained" color="primary">
                            Login
                            </MUButton>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(muStyles)(Login))