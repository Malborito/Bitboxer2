import React from 'react';
import { Provider } from 'react-redux';

import { store } from "./store/store";
import { AppRouter } from './routers/AppRouter';




export const BitboxerApp = () => {
  
    // const categories = ['One Punch', ' Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState([]);


    return ( 
        <Provider store = { store }>

            <AppRouter />

        </Provider>
    );
    
}
   
export default BitboxerApp;