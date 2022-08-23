import React from "react";

const Event = ({ events, registerId }) => {
  return (
    <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {events.map((event) => (
        <div class="card  bg-base-100 shadow-xl m-5">
          <figure>
            <img src={event.photos} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{event.name}</h2>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <p> age Range {event.ageRange}</p>
            <p>Price money {event.priceMoney}</p>

            <div class="card-actions justify-end">
              <label
                className="btn"
                for="register-modal"
                class="btn modal-button"
                onClick={() => registerId(event._id)}
              >
                Register
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
