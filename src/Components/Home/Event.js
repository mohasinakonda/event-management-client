import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useEvent from "../../hooks/useEvent";

const Event = () => {
  const [events] = useEvent([]);

  return (
    <div className="grid grid-cols-3 m-4">
      {events.map((event) => (
        <div class="card w-96 bg-base-100 shadow-xl my-3">
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
              <button class="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
