import React from "react";

const FilterBar = React.memo(({ category, onCategoryChange }) => {
  console.log("FilterBar Rendered ✅");

  return (
    <div className="flex gap-3 items-center mb-3">
      <label className="font-semibold">Filter by Category:</label>
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All</option>
        <option value="Gold">Gold</option>
        <option value="Diamond">Diamond</option>
        <option value="Silver">Silver</option>
      </select>
    </div>
  );
});

export default FilterBar;
