import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useEvent from "../../hooks/useEvent";
import Event from "./Event";
import Modal from "./Modal";

const Home = () => {
  const [price, setPrice] = useState(0);
  const [age, setAge] = useState(0);
  const [type, setType] = useState([]);
  const [name, setName] = useState([]);
  const [city, setCity] = useState([]);
  const [events, setEvent] = useState([]);
  const [result, setResult] = useState([]);
  const [eventId, setEventId] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/product")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setResult(data);
      });
  }, []);

  const locations = [...new Set(result.map((event) => event.location))];
  const typesOfGame = [...new Set(result.map((event) => event.type))];
  const nameOfGame = [...new Set(result.map((event) => event.name))];

  const selectByCity = (event) => {
    const city = event.target.value;
    setCity(city);
    fetch(`http://localhost:8000/product/${city}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  };
  const ageHandler = (event) => {
    const age = event.target.value;
    const eventByAge = events.filter((event) => event.ageRange === age);
    setEvent(eventByAge);
  };
  const rangeHandler = (event) => {
    const range = event.target.value;
    const eventByRange = events.filter((event) => event.ageRange === range);
    setEvent(eventByRange);
  };
  const handleEventByName = (event) => {
    const eventName = event.target.value;

    const eventsByName = events.filter((event) => event.name === eventName);
    console.log(eventsByName);
    setEvent(eventsByName);
  };
  const registerId = (id) => {
    setEventId(id);
  };
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        <label for="my-drawer-2" class=" lg:hidden">
          <span className="text-4xl text-primary btn btn-sm btn-outline fixed z-10">
            &gt;
          </span>
        </label>
        {/* <!-- Page content here --> */}
        <h2 className="text-3xl text-center">CHOOSE YOUR EVENTS</h2>
        <Event events={events} registerId={registerId} />
        <Modal eventId={eventId} />
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <h2 className="text-2xl">Sort by</h2>

          <div class="form-control">
            <label class="flex items-center  cursor-pointer">
              <span class=" label-text text-xl p-2">Location</span>
            </label>
            <select
              onChange={selectByCity}
              className="select"
              name="location"
              id=""
            >
              <option>select Location</option>
              {locations.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div class="form-control">
            <label class="flex items-center  cursor-pointer">
              <span class="label-text p-2 text-xl">Competition type</span>{" "}
            </label>
            <select className="select" name="" id="">
              <option>select Event type</option>
              {typesOfGame.map((eventType) => (
                <option key={eventType} value={eventType}>
                  {eventType}
                </option>
              ))}
            </select>
          </div>
          <div class="form-control">
            <label class="flex items-center  cursor-pointer">
              <span class="label-text p-2 text-xl">Competition name</span>{" "}
            </label>
            <select
              onChange={handleEventByName}
              className="select"
              name=""
              id=""
            >
              <option>select game name</option>
              {nameOfGame.map((eventName) => (
                <option key={eventName} value={eventName}>
                  {eventName}
                </option>
              ))}
            </select>
          </div>
          <div class="form-control">
            <h3 className="text-xl">Sort by age</h3>
            <label class="flex items-center  cursor-pointer">
              <input
                onChange={ageHandler}
                className="range range-primary"
                type="range"
                name="age"
                min="0"
                max="600"
                step="5"
              />
              <span class="label-text px-2">{age}</span>
            </label>
          </div>
          <div class="form-control">
            <h3 className="text-xl">Price range</h3>
            <label class="flex items-center  cursor-pointer">
              <input
                onChange={rangeHandler}
                className="range range-primary"
                type="range"
                name="price"
                min="0"
                max="100000"
                step="100"
              />
              <span class="label-text px-2">{price}</span>
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Home;
