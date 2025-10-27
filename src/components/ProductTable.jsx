import React from "react";

const ProductTable = React.memo(({ products, onSelect }) => {
  console.log("ProductTable Rendered ✅");

  return (
    <table className="w-full border mt-2">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Category</th>
          <th className="p-2 border">Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr
            key={p.id}
            onClick={() => onSelect(p)}
            className="hover:bg-gray-100 cursor-pointer"
          >
            <td className="p-2 border">{p.name}</td>
            <td className="p-2 border">{p.category}</td>
            <td className="p-2 border">{p.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default ProductTable;
