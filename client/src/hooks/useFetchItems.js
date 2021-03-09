import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemsActions } from '../actions/itemsActions';
import { getItems } from '../helpers/getItems';

export const useFetchItems = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {
        getItems()
            .then( items => {
                    setState({
                        data: items,
                    })
                    dispatch( itemsActions(items))             
                }
            );
    }, [])
    return state; //{ data: [], loading: true }
}