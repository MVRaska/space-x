import {Card} from "../../styledComponents/GlobalStyles";
import {Link} from 'react-router-dom';
import api from '../../axios/api';

const RocketsListItem = ({rocket}) => {
    return <Link to={`/rockets/${rocket.id}`}>
        <Card>
        <p>{rocket.name}</p>
        <p>{rocket.country}</p>
        <img src={rocket.flickr_images[1]} alt={rocket.name}  style={{ width: '80%',  borderRadius: '20px' }} />
        <p>{rocket.description}</p>
    </Card>
    </Link>
}

export default RocketsListItem;