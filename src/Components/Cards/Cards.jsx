import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({cards}) => {

 
    return (
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {
                cards?.map(card=> <Card key={card.id} card={card}></Card>)
            }
        </div>
        
    );
};
Cards.propTypes = {
    cards: PropTypes.object
}

export default Cards;