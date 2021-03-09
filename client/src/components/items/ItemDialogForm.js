import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, InputLabel, TextField, Typography } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { Check, Close, KeyboardReturn } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { editableItemAction } from '../../actions/itemsActions';
import { useFetchUpdateItem } from '../../hooks/useFetchUpdateItem';
import { updateItemFunction } from '../../functions/updateItemFunction';

export const ItemDialogForm = ({ onClose }) => {

    const [edited, setEdited] = useState(false);
    const [item, setItem] = useState({
        id : '',
        code : '',
        description : '',
        price : 0,
        state : false,
        pricereductions : [],
        suppliers : [],
        creation : '',
        creator : ''
      });
    

    const handleChange = ({ target }) => {
        dispatch(editableItemAction({
            ...storedItem,
            [target.name]: target.value
        }));

    };

    const handleCloseDialog = () => {
        onClose();
    };

    const handleSaveItem = () => {
        (updateItemFunction(storedItem))? alert('Guardado'): alert('No guardado ');
        onClose();
    };


    const storedItem = useSelector(state => state.items.activeItem);
    
    const dispatch = useDispatch();

    // const saveItem = useFetchUpdateItem(storedItem, edited);

      return (
        <>
            <div className="formDialogItem">
                <form >
                    <Grid 
                        container 
                        justify="space-between"
                        alignItems="center">

                        <Grid item
                            container sm={6}  
                            justify="space-between"
                            alignItems="center"
                            direction="column">
                            <Grid item className='formItem' sm={12}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="code">Item Code</InputLabel>
                                    <OutlinedInput
                                        id="code"
                                        value={storedItem.code}
                                        name = "code"
                                        onChange={handleChange}
                                        labelWidth={80}
                                        disabled= {true}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item className='formItem' sm={12}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="description">Description</InputLabel>
                                    <OutlinedInput
                                        id="description"
                                        value={storedItem.description}
                                        name = "description"
                                        onChange={handleChange}
                                    labelWidth={80}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item className='formItem' sm={12}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="price">Price</InputLabel>
                                    <OutlinedInput
                                        id="price"
                                        value={storedItem.price}
                                        name = "price"
                                        onChange={handleChange}
                                    labelWidth={40}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item className='formItem' sm={12}>
                                <TextField 
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    // value={storedItem.creation}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item
                            container sm={6}  
                            justify="space-between"
                            alignItems="center"
                            direction="column">

                            <Grid item className='formItem' sm={12}>
                                <Typography> Suppliers</Typography>
                                <ol >
                                    <li></li><li></li>
                                </ol>
                            </Grid>
                            <Grid item className='formItem' sm={12}>
                                <Typography> Price Reduction</Typography>
                                <ol >
                                    <li></li><li></li>
                                </ol>
                            </Grid>
                            <Grid item className='formItem' sm={12}>

                                <FormControlLabel
                                    value = {storedItem.state}
                                    // checked = {(item.state == 'ACTIVE')}
                                    name="state"
                                    control={<Switch color="primary" onChange={handleChange}/>}
                                    label= 'state'
                                    labelPlacement="bottom"
                                />

                            </Grid>

                        </Grid>
                    </Grid>
                </form>

            </div>
            
            <div className="actions">
                <Grid 
                    container 
                    justify="space-between"
                    alignItems="center">

                    <Grid item className='formItem' sm={6}>
                        <Button className="formItem"
                            variant="contained"
                            color="secondary"
                            startIcon={<SaveIcon />}
                            onMouseDown= {handleCloseDialog}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item className='formItem' sm={6}>
                        <Button className="formItem"
                            variant="contained"
                            color="primary"
                            onMouseDown = {handleSaveItem}
                            startIcon={<SaveIcon />}
                            >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </div>
                
        </>
    )
}
