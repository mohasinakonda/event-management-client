import React, { useEffect } from "react";
import { useState } from "react";

const useEvent = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return [events];
};

export default useEvent;
