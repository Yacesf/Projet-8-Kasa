import React, { useEffect, useState } from "react";
/*import { useLocation } from "react-router-dom";*/
import AppartmentCard from "../AppartmentCard/appartmentCard";
import "./appartment-home.css";
import { useAppartmentContext } from "../../../context/AppartmentContext";

function AppartmentHome() {
  const appartmentContext = useAppartmentContext();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(appartmentContext);
    console.log(data);
  }, []);

  useEffect(() => {
    if (data && data.length !== 0 && data[1].id === "b9123946") {
      const copyData = structuredClone(data);
      setData(copyData.sort((a, b) => a.title.localeCompare(b.title)))
    }
  }, [data])
  console.log(data);

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
