import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import SaveIcon from '@material-ui/icons/Save';
import { useSelector, useDispatch } from 'react-redux';


export default function ItemDialogDelete(props) {
  const { onClose, open } = props;

  const itemlist = useSelector(state => state.items.items);

  const handleDeleteItem = () => {
    console.log('handleDeleteItem');
    // console.log(props.selectedValue);

  }

  const handleClose = () => {
    onClose();
  };

  return (

      <Dialog
        className="dialog"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <MuiDialogTitle  id="deleteItemDialog">
          Delete Item?

        </MuiDialogTitle>
  
        <div className="actions">
                <Grid 
                    container 
                    justify="space-between"
                    alignItems="center">

                    <Grid item className='formItem' sm={6}>
                        <Button className="formItem"
                            variant="contained"
                            color="primary"
                            startIcon={<Close />}
                            onMouseDown= {handleClose}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item className='formItem' sm={6}>
                        <Button className="formItem"
                            variant="contained"
                            color="secondary"
                            onMouseDown = {handleDeleteItem}
                            startIcon={<SaveIcon />}
                            >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </div>
      </Dialog>
    );


}
