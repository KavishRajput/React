import { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import { Loader } from "./components/Loader";
import { Link } from "react-router";

export default function App() {
  const [filterdata, setFilterdata] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const data = await response.json();
      setFilterdata(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center p-4">
        {filterdata.length === 0 ? (
          <div className="flex justify-center items-center h-screen flex-wrap z-[-1]">
            {Array.from({ length: 8 }).map((_, index) => (
              <Loader key={index} />
            ))}
          </div>
        ) : (
          filterdata.map((value, index) => {
          return(
            <>
            <Link to={`/product/${value.id}`} key={value.id}>
            <Cards data={value} />
            </Link>
            </>
          )
        })
        )}
      </div>
    </>
  );
}
