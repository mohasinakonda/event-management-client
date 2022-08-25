import React from "react";

const Event = ({ events, registerId }) => {
  console.log(events.date);
  return (
    <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {events.map((event) => (
        <div class="card  bg-base-100 shadow-xl m-5">
          <figure>
            <img src={event.photos} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title uppercase">{event.name}</h2>
            <p className="uppercase">{event.location}</p>
            <p className="capitalize">{event.description}</p>
            <p
              className="capitalize> age Range {event.ageRange}</p>
            <p className="
              capitalize
            >
              Price money <span className="font-bold">{event.priceMoney}</span>
            </p>
            <p className="">
              {" "}
              Dadeline{" "}
              <span className="bg-red-300 p-2 rounded-full">{event.date}</span>
            </p>
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
