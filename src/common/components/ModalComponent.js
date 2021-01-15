import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import MuTextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MUButton from '@material-ui/core/Button'


const muStyles = theme => ({
    paper: {
      position: 'relative',
      'width': '50%',
      height: '500px',
      padding: '20px',
      'text-align': 'center',
      margin: '10% auto',
      background: 'white'
  },
  title:{
    display: 'inline'
  },
  close:{
    float: 'right',
    cursor: 'pointer'
  },
  articleID: {
    'margin-top': '50px',
    'max-width': '300px'
  },
  articleName: {
    width: '100%',
    'margin-top': '30px'
  },
  articleDescription:{
    width: '100%',
    'margin-top': '30px'
  },
  button: {
    'margin-top': '20px'
  }
})
 
class ModalComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      article: {}
    }
  }
  onChange = (evt) =>{
    const {article} = this.state
    article[evt.target.name] = evt.target.value
    this.setState({
      article 
    })
  }
  render =() =>{
    const { handleClose, show, classes, addNewArticle } = this.props
    const {article} = this.state
    return (
      <Modal
          open={show}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
      >
      <Paper className={classes.paper}>
        <div className={classes.title}>Add new Article</div>
        <span className={classes.close} onClick={handleClose}>X</span>
        <div className={classes.body}>
          <MuTextField onChange={this.onChange} className={classes.articleID} name='articleID' id="standard-basic" label="Article ID" />
          <TextareaAutosize onChange={this.onChange} className={classes.articleName} rowsMin={3} name='articleName' id="standard-basic" placeholder="Article Name" />
          <TextareaAutosize onChange={this.onChange} className={classes.articleDescription} rowsMin={10} name='articleDescription' id="standard-basic" placeholder="Article Description" />
        </div>
        <div className={classes.footer}>
          <MUButton onClick={()=>{addNewArticle(article)}} className={classes.button} variant="contained" color="primary">
            Add Article
          </MUButton>
        </div>
      </Paper>
      </Modal>
    );
  }
}

export default withStyles(muStyles)(ModalComponent)