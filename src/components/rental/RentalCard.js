// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

const RentalCard = ({rental}) => {

return (
    <div className="card bwm-card">
    <Link className="rental-link" to={`/rentals/${rental._id}`}>
        <img
          className="card-img-top"
          src={rental.image}
          alt={rental.title} />
        <div className="card-body">
          <h6 className={`card-subtitle mb-0 type-${rental.category}`}>
            {rental.shared ? 'Shared': 'Whole' } {rental.category} &middot; {rental.city}
          </h6>
          <h5 className="card-title big-font">{rental.title}</h5>
          <p className="card-text">${rental.dailyPrice} per Night &#183; Free Cancellation </p>
        </div>
      </Link>
    </div>
  )}


export default RentalCard;
