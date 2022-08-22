import React from "react";
import { useState } from "react";
import useEvent from "../../hooks/useEvent";
import Event from "./Event";

const Home = () => {
  const [price, setPrice] = useState(0);
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState([]);
  const [types, setTypes] = useState([]);
  const [games, setGames] = useState([]);

  const [events] = useEvent();
  const ageRanges = new Set(events.map((event) => event.ageRange));
  const locations = new Set(events.map((event) => event.location));
  const typesOfGame = new Set(events.map((event) => event.type));
  const nameOfGame = new Set(events.map((event) => event.name));
  const priceRange = new Set(events.map((event) => event.priceRange));
  setLocation([...locations]);
  setAge([...ageRanges]);
  setTypes([...typesOfGame]);
  setGames([...nameOfGame]);
  setPrice([...priceRange]);
  const rangeHandler = (event) => {
    const price = event.target.value;
    const filtedByPrice = events.filter((event) => event.priceMoney <= price);
    console.log(filtedByPrice);
    setPrice(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        {/* <!-- Page content here --> */}
        <Event />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <h2 className="text-2xl">Sort by</h2>

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
            <label class="flex items-center  cursor-pointer">
              <span class=" label-text text-xl p-2">Location</span>
            </label>
            <select className="select" name="" id="">
              <option>select Location</option>
              <option value="">mymensingh</option>
              <option value="">dhaka</option>
              <option value="">Rajshahi</option>
            </select>
          </div>
          <div class="form-control">
            <label class="flex items-center  cursor-pointer">
              <span class="label-text p-2 text-xl">Competition type</span>{" "}
            </label>
            <select className="select" name="" id="">
              <option>select Location</option>
              <option value="">mymensingh</option>
              <option value="">dhaka</option>
              <option value="">Rajshahi</option>
            </select>
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
