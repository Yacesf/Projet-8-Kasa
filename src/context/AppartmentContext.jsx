import { createContext, useContext, useState, useEffect } from "react";

const AppartmentContext = createContext();

export const useAppartmentContext = () => {
  return useContext(AppartmentContext);
};

export const AppartmentProvider = ({ children }) => {
  const [appartment, setAppartment] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("../../data.json", {
          method: "GET",
        });
        const d = await data.json();
        setAppartment(d);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <AppartmentContext.Provider value={appartment}>
      {children}
    </AppartmentContext.Provider>
  );
};
