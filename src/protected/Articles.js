import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import ModalComponent from '../common/components/ModalComponent'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { addArticle, deleteArticle } from '../common/actions/articles'


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
    list: {
        display: 'flex',
        'flex-direction': 'column',
        padding: '60px',
        background: '#dbdedf',
        opacity: '0.91',
        'border-radius': '20px',
        width: '700px',
        position: 'absolute',
        top: '0'
    },
    article: {
        '&:hover': {
            background: 'lightgray'
        },
        cursor: 'pointer',
        'padding': '20px',
        'border-bottom': '2px solid'
    },
    articleHeader: {
        'margin-bottom': '10px',
        'font-weight': 'bold',
        'font-size': '15px',
        display: 'inline'
    },
    articleName: {
        'margin-bottom': '10px',
        'font-size': '20px',
    },
    heading: {
        'font-size': '30px',
        'margin-bottom': '30px',
        'font-weight': 'bold'
    },
    delete: {
        float: 'right',
        color: 'red',
        'font-weight': 'bold',
        cursor: 'pointer'
    },
    addButton: {
        'font-size': '20px',
        'margin-bottom': '20px',
        cursor: 'pointer'
    }
  });

class Articles extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.add = this.add.bind(this)
        this.addNewArticle = this.addNewArticle.bind(this)
    }
    delete = (id) =>{
        this.props.deleteArticle(id)
    }
    add = () =>{
        this.setState({showModal: true})
    }
    close = () =>{
        this.setState({showModal: false})
    }
    gotoArticle = (article, evt) =>{
        if(evt.target.tagName.toLowerCase() === 'span')
            this.delete(article.articleID)
        else
            this.props.history.push({
                pathname: '/articleDetail',
                state: { article }
            })
    }
    renderArticles = () =>{
        const {classes, articles} =  this.props
        return articles && articles.length && articles.map((article)=>{
            return (
                <div onClick={this.gotoArticle.bind(this,article)} className={classes.article}>
                    <span className={classes.delete} onClick={this.delete.bind(this, article.articleID)}>X</span>
                    <div className={classes.articleName}>{article.articleName}</div>
                </div>
            )
        })
    }
    addNewArticle = (newArticle) =>{
        this.props.addArticle(newArticle)
        this.setState({
            showModal: false
        })
    }
    render(){
        const {classes} = this.props;
        const {showModal} = this.state
        return(
            <div>
                <div className={classes.image}/>
                <div className={classes.parent}>
                    <Paper className={classes.paper}>
                        <div className = {classes.list}>
                        <span><button onClick={this.add} className={classes.addButton}>Add</button></span>
                            <div className={classes.heading} >List of Articles:</div>
                           {this.renderArticles()}
                           <ModalComponent addNewArticle={this.addNewArticle} show={showModal} handleClose={this.close}></ModalComponent>
                        </div> 
                    </Paper>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    articles: state.articles || []
  })
  
  const mapDispatchToProps = dispatch => ({
    addArticle: data => {
        dispatch(addArticle(data));
    },
    deleteArticle: data =>{
        dispatch(deleteArticle(data));
    }
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(muStyles)(Articles)))