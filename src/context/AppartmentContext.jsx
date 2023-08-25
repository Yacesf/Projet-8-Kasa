import { createContext, useContext, useState, useEffect } from "react";

const AppartmentContext = createContext();

export const useAppartmentContext = () => {
  return useContext(AppartmentContext);
};

async function fetchData() {
  const data = await fetch("./data.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  return data.json();
}

export const AppartmentProvider = ({ children }) => {
  const [appartment, setAppartment] = useState([]);

  useEffect(() => {
    fetchData().then((r) => {
      setAppartment(r)
    }).catch(err => console.log(err))
  }, []);

  return (
    <AppartmentContext.Provider value={appartment}>
      {children}
    </AppartmentContext.Provider>
  );
};