import React from 'react';



const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 299,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 999,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    price: 400,
  },
  {
    id: 5,
    "name": "Product 5",
    description: "Description for Product 5",
    price: 500,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for Product 6",
    price: 600,
  }

];
export default function Home() {
  return (
    <div className="container mx-auto py-4">
    <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold text-black">{product.name}</h2>
          <p className="text-gray-500">{product.price.toFixed(2)}</p>
          <p className="mt-2 text-black">{product.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
