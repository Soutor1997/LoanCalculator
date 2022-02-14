import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./components/container/Container";
import "./app.css";

export default function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("https://www.myjsme.cz/products.php");
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Container data={product} />
      </div>
    </>
  );
}
