import { useMemo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import GoldRateBanner from "./GoldRateBanner";
import FilterBar from "./FilterBar";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  const products = useSelector((state) => state.products.items);
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🧠 useMemo — compute filtered products only when dependencies change
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products 🧮");
    return category
      ? products.filter((p) => p.category === category)
      : products;
  }, [products, category]);

  // ⚡ useCallback — stable function for child props
  const handleProductSelect = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  return (
    <div className="p-5">
      <GoldRateBanner />
      <h2 className="text-2xl font-bold mt-4 mb-3">Jewellery Dashboard 💎</h2>
      <FilterBar category={category} onCategoryChange={handleCategoryChange} />
      <ProductTable products={filteredProducts} onSelect={handleProductSelect} />

      {selectedProduct && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
          <h3 className="text-lg font-semibold mb-1">
            Selected Product Details:
          </h3>
          <p>
            <strong>{selectedProduct.name}</strong> (
            {selectedProduct.category}) – ₹{selectedProduct.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
