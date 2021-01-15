import React from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { Link, withRouter } from 'react-router-dom'


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
    form: {
        display: 'flex',
        'flex-direction': 'column',
        padding: '30px',
        background: '#dbdedf',
        'border-radius': '20px',
        width: '700px',
        position: 'absolute',
        top: '0',
        'line-height': '2'
    },
    description: {
        'font-weight': 'bold',
        'font-size': '20px',
        'word-wrap': 'break-word'
    },
    backButton: {
        'font-size': '20px',
        'margin-bottom': '20px',
        cursor: 'pointer'
    }
  });

class ArticleDetails extends React.Component{
    constructor(props){
        super(props)
    }
    back = () =>{
        this.props.history.push('articles')
    }
    render(){
        const { classes} = this.props
        const article = this.props.location?.state?.article
        return(
            <div>
                <div className={classes.image}/>
                <div className={classes.parent}>
                    <Paper className={classes.paper}>
                        <div className={classes.form}>
                            <span><button onClick={this.back} className={classes.backButton}>Back</button></span>
                            <span className={classes.description}>{article.articleDescription}</span>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(muStyles)(ArticleDetails))