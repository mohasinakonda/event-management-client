import React, { useEffect } from "react";
import { useState } from "react";

const useEvent = () => {
  const [events, setEvents] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setResult(data);
      });
  }, []);
  return [events, result, setEvents];
};

export default useEvent;
