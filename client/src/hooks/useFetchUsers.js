import { useEffect, useState } from 'react';
import { getUsers } from '../helpers/getUsers';

export const useFetchUsers = () => {

    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {
        getUsers()
            .then( users => {
                setState({
                    data: users
                })
            });
    }, [])

    return state; //{ data: [], loading: true }
}