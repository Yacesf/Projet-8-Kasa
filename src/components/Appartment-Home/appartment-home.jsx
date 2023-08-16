import React, { useEffect, useState } from "react";
import AppartmentCard from "../AppartmentCard/appartmentCard";
import "./appartment-home.css";

async function fetchData() {
  const data = await fetch("./data.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
}

function AppartmentHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((r) => {
      setData(r);
    });
  }, []);
  useEffect(() => {
    if (data.length !== 0 && data[1].id === "b9123946") {
      const copyData = structuredClone(data);
      setData(copyData.sort((a, b) => a.title.localeCompare(b.title)));
    }
  }, [data]);

  return (
    <div id="appartment">
      <div id="appartment__container">
        {data.map((item) => (
          <AppartmentCard
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default AppartmentHome;
