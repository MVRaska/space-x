import { Link } from "react-router-dom";
import { Card } from "../../styledComponents/GlobalStyles";

const ShipsListItem = ({ship}) => {

    console.log(ship);
    
    return <Link to={`/ships/${ship.id}`}>
        <Card>
            <p>{ship.name}</p>
            <img src={ship.image} alt={ship.name} style={{width: '80%', borderRadius: '20px'}} />
            <p>Type: {ship.type}</p>
        </Card>
    </Link>
}

export default ShipsListItem;