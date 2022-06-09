//Grilla de Categorias

import React, { useState } from "react";
import CardCategory from "./CardCategory"; 
//import axios from "axios";

const dataCat = ['viento','percusion','cuerda']

const CategoryProduct = () => {


  const [category, setCategory] = useState([]);  // front

/*   useEffect(() =>
    axios
      .get("/api/categories")
      .then((res) => res.data)
      .then((category) => setCategory(category)) // back
  ,[]);
 */

console.log(category)
  return (
    <div>
      <h1> Categories</h1>
      {category.map((categoria)=>
      <CardCategory propCat={categoria}/>)}
    </div>
  );
};

export default CategoryProduct;
