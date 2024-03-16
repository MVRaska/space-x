import {useContext, useEffect, useState} from 'react';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import api from '../../axios/api';
import { LaunchesContext } from '../../launchesContext/LaunchesContext';

const LaunchView = () => {
    const [launch, setLaunch] = useState(null);

    // const [state, setState] = useState(LaunchesContext);

    const navigate = useNavigate();

    const {launchId} = useParams();
    console.log(launchId);

    const backBtn = () => {
        navigate(-1);
    };

    useEffect(() => {
        // const myLaunch = state.launches.filter(
        //     launch => launch.id === launchId)[0];
        // console.log('mylaunch', myLaunch);
        // setLaunch(myLaunch);

        api.get(`/launches/${launchId}`)
        .then(res => setLaunch(res.data))
    }, []);

    console.log(launch);

    return <div>
        <button onClick={backBtn}>back to launches</button>
        LaunchView single
        {launch ? (
            <div>
                <p>{launch.name}</p>
                <img src={launch.links.patch.small} alt={launch.name} />
                <p>{launch.links.wikipedia}</p>
            </div>)
        : null}
    </div>
}

export default LaunchView;