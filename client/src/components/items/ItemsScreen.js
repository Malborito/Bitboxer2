import React from 'react';
import TableItemsComponent from './TableItemsComponent';
import ItemDialog from './ItemDialog';

export const ItemsScreen = ({ history }) => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = (item) => {
        setSelectedValue(item);
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

    return ( 
        <>
            <TableItemsComponent onOpen={handleClickOpen}/>
            <ItemDialog open={open} onClose={handleClose}/>
        </>
    );
    
}
   
export default ItemsScreen;