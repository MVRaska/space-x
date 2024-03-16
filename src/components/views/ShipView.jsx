import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const ShipView = () => {
    const [ship, setShip] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const {shipId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/ships/${shipId}`)
        .then(response => setShip(response.data))
        .catch(e => setError(true))
        .finally(() => setLoading(false))
    }, [])

    const backBtn = () => {
        navigate(-1);
    }

    if(loading) return <Loading />
    if(error) return <Error />

    return <div>
        <button onClick={backBtn}>back to ships</button>
        ShipView single
        {ship ? (<div>
                <p>{ship.name}</p>
                <img src={ship.image} alt={ship.name} style={{width: '80%', borderRadius: '30px'}} />
                <p>{ship.link}</p>
            </div>) : null
        }
    </div>
}

export default ShipView;