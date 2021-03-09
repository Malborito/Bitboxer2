import { useEffect, useState } from 'react';
import { updateItem } from '../helpers/updateItem';

export const useFetchUpdateItem = (itemToSave, flag) => {
    const [state, setState] = useState({
        data: [],
    });
    
    debugger;
    useEffect( () => {
        if(flag){
            updateItem()
                .then(item => {
                        setState({
                            data: item,
                        })
                    });
                }
            }, [flag])
    return state;
}