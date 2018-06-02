import React, {Fragment, Component} from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from '@material-ui/icons/Add';

export default class extends Component {
    state = {
        open: false
    }


    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    render () {
        const {open} = this.state
        return (<Fragment>  
        <Button 
        variant = "fab"
        onClick={this.handleToggle}
        mini

        >
        <AddIcon/>
        
        </Button>
                <Dialog
                  open={open}
                  onClose={this.handleToggle}
                >
                  <DialogTitle id="form-dialog-title">Create a new Exercise</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please fill out the from below in order to create the new exercise. 
                    </DialogContentText>
               
                  </DialogContent>
                  <DialogActions>
                  
                    <Button 
                    onClick={this.handleClose} 
                    color="primary"
                    variant="raised"
                    >
                      Create
                    </Button>
                  </DialogActions>
                </Dialog>
        </Fragment> )
    }
}
 

    