import { useEffect, useState } from "react";
import api from "../../axios/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

const RocketView = () => {
    const [rocket, setRocket] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const {rocketId} = useParams();

    useEffect(() => {
        api.get(`/rockets/${rocketId}`)
        .then(response => setRocket(response.data))
        .catch(e => setError(true))
        .finally(() => setLoading(false))
    }, [])

    const navigate = useNavigate();
    const backBtn = () => {
        navigate(-1);
    }

    if(loading) return <Loading />
    if(error) return <Error />

    return <div>
        <button onClick={backBtn}>back to rockets</button>
        RockethView single
        {rocket ? (
            <div>
                <p>{rocket.name}</p>
                <img src={rocket.flickr_images[0]} alt={rocket.name}  style={{ width: '80%',  borderRadius: '30px' }} />
                <p>{rocket.wikipedia}</p>
            </div>) : null
        }
    </div>
}

export default RocketView;