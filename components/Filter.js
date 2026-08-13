import { useState } from "react";

const Filter = () => {
  const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  const [products, setproducts] = useState(data);
  function FilterProduct() {
    const FilteredProduct = data.filter((item) => item.stocked === false);
    setproducts(FilteredProduct);
  }
  return (
    <div>
      <button onClick={FilterProduct}>outstock</button>
      {products.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>category:{item.category}</p>
          <p>price:{item.price}</p>
          <p>stock:{item.stocked ? "True" : "False"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Filter;
