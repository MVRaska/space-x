import {useEffect, useState} from 'react';
import api from '../../axios/api';
import RocketsList from '../rockets/RocketsList';
import Loading from '../loading/Loading';
import Error from '../error/Error';

const RocketsView = () => {
    const [rockets, setRockets] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/rockets/`)
        .then(res => setRockets(res.data))
        .catch(e => setError(true))
        .finally(() => setLoading(false))
    }, []);

    console.log(rockets);

    return <>
        <h1>RocketsView</h1>
        {loading ? <Loading /> : error ? <Error error={error} /> : <RocketsList rockets={rockets} />}
    </>
}

export default RocketsView;