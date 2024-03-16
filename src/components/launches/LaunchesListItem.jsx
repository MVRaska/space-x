import {Card} from "../../styledComponents/GlobalStyles";
import {Link} from 'react-router-dom';

const LaunchesListItem = ({launch}) => {
    return <Link to={`/launches/${launch.id}`} >
        <Card>
            <h3>{launch.name}</h3>
            <img src={launch.links.patch.small} alt={launch.name} />
            <p>{launch.details}</p>
        </Card>
    </Link>
}

export default LaunchesListItem;


/*
VI
Ažurirajte LaunchesListItem tako da klikom na komponentu korisnika preusmeri na novu rutu koja
prikazuje pojedinačni lansiranje, na osnovu ID-ja iz URL-a.
Napravite rutu za pojedinačno lansiranje.
Napravi back button za vracanje na all launches
*/