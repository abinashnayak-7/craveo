import React from "react";
import { CloudUpload } from "lucide-react";

const Add = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <form className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        {/* Upload Image */}
        <div className="mb-5">
          <p className="mb-2 text-sm font-medium text-zinc-700">Upload Image</p>

          <label className="flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 text-zinc-600 hover:border-orange-400 hover:text-orange-500 transition">
            <CloudUpload size={28} />
            <span className="text-xs">Click to upload image</span>
            <input type="file" hidden required />
          </label>
        </div>

        {/* Product Name */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Write food description"
            className="w-full resize-none rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        {/* Category */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Category
          </label>
          <select
            name="category"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            <option>Fast Food</option>
            <option>Pizza & Pasta</option>
            <option>Indian Cuisine</option>
            <option>Street Food</option>
            <option>Gym and Health</option>
            <option>Deserts</option>
            <option>Beverages</option>
            <option>Regional Cuisine</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="20"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition sm:w-auto"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
