import { useContext, useEffect, useState } from "react";
import {ShipsContext} from '../../shipsContext/ShipsContext';
import api from '../../axios/api';
import ShipsList from "../ships/ShipsList";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const ShipsView = () => {
    // const [ships, setShips] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(true);

    const {state, dispatch} = useContext(ShipsContext);
    const {ships, loading, error} = state;

    // const fetchLaunches = () => {}

    useEffect(() => {
        // if(launches.length === 0) {
        //     fetchLaunches();
        // api.get('/ships')
        // .then(response => setShips(response.data.slice(4, 14))) 
        // .catch(error => setError(true)) 
        // .finally(() => setLoading(false))
        // }

        dispatch({type: "FETCH_SHIPS_REQUEST"});

        api.get('/ships')
        .then(response => dispatch({type: 'FETCH_SHIPS_SUCCESS', payload: response.data.slice(4, 14)}))
        .catch(error => dispatch({type: 'FETCH_sHIPS_FAILURE', payload: error.response}))

    }, []);

    // console.log(ships);

    return <>
        <h1>ShipsView</h1>
        {loading ? <Loading /> : error ? <Error error={error} /> : <ShipsList ships={ships} />}
    </>
}

export default ShipsView;