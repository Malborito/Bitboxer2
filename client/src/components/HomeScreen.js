import React from 'react';
import AppBarComponent from './ui/AppBarComponent';
import DialogComponent from './ui/DialogComponent';
import TableItemsComponent from './items/TableItemsComponent';

export const HomeScreen = ({ history }) => {
  
    // const categories = ['One Punch', ' Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState([]);


    return ( 
        <>
            <TableItemsComponent />
            <DialogComponent />
        </>
    );
    
}
   
export default HomeScreen;