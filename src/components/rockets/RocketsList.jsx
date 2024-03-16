import RocketsListItem from './RocketsListItem';

const RocketsList = ({rockets}) => {

    console.log(rockets);
    return <div>
        {
            rockets.map(rocket => <RocketsListItem key={rocket.id} rocket={rocket} />)
        }
    </div>
}

export default RocketsList;