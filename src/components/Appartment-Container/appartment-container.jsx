import React, { useEffect, useState } from "react";
import Appartment from "../Appartment/appartment";
import "./appartment-container.css";

async function fetchData() {
  const data = await fetch("./data.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
}

function AppartmentContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((r) => {
      setData(r);
    });
  }, []);
  useEffect(() => {
    if (data.length !== 0 && data[1].id === "b9123946") {
      const copyData = structuredClone(data)
      setData(copyData.sort((a, b) => a.title.localeCompare(b.title)));
    }
  }, [data]);

  return (
    <div id="appartment">
      <div id="appartment__container">
        {data.map((item) => (
          <Appartment key={item.id} cover={item.cover} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default AppartmentContainer;
