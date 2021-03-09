import React from 'react';
import TableItemsComponent from './TableItemsComponent';
import ItemDialog from './ItemDialog';
import ItemDialogDelete from './ItemDialogDelete';

export const ItemsScreen = ({ history }) => {

    const [selectedValue, setSelectedValue] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    

    const handleClickOpen = (item) => {
        setSelectedValue(item);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleClickOpenDelete = (item) => {
        setSelectedValue(item);
        setOpenDelete(true);
      };
    
      const handleClickCloseDelete = () => {
        setOpenDelete(false);
      };
    return ( 
        <>
            <TableItemsComponent onOpen={handleClickOpen} onDelete={handleClickOpenDelete} setSelectedValue={setSelectedValue}/>
            <ItemDialog open={open} setOpen={setOpen} onClose={handleClose}/>
            {/* <ItemDialogDelete open={openDelete}/> */}
            <ItemDialogDelete open={openDelete} setOpen={setOpenDelete} onClose={handleClickCloseDelete} selectedValue={selectedValue}/>
        </>
    );
    
}
   
export default ItemsScreen;