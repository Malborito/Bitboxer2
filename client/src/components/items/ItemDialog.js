import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { blue } from "@material-ui/core/colors";
import { ItemDialogForm } from "./ItemDialogForm";
import { DialogActions, IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function ItemDialog(props) {
  const { onClose, open } = props;

  const itemlist = useSelector(state => state.items.items);

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
        <MuiDialogTitle  id="editItemDialog">
          Edit Item
          
            <IconButton className="closeButtonDialog" aria-label="delete" onMouseDown= {handleClose}>
              <Close />
            </IconButton>
        </MuiDialogTitle>
  
        <ItemDialogForm onClose={handleClose}/>
        {/* <ItemDialogForm /> */}
      </Dialog>
    );


}
