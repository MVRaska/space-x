import ShipsListItem from "./ShipsListItem";

const ShipsList = ({ships}) => {
    
    console.log(ships);
    return <>
        {ships.map(ship => {
           return <ShipsListItem key={ship.id} ship={ship} />
        })}
    </>
}

export default ShipsList;