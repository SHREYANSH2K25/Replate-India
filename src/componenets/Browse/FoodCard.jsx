import React from 'react';

export default function FoodCard ({ id, food })  {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg border border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <span
        className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full 
          ${food.status === "Fresh" ? "bg-green-100 text-green-700" :
            food.status === "Requested" ? "bg-yellow-100 text-yellow-800" :
            "bg-gray-200 text-gray-700"}`}
      >
        {food.status}
      </span>
      <h3 className="text-xl font-semibold text-teal-800 mb-2">{food.title}</h3>
      <p className="text-gray-600 mb-2">{food.quantity} | {food.type}</p>
      <p className="text-gray-700 mb-4">{food.description}</p>

      {food.image && (
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <p className="text-gray-600">
        {typeof food.address === 'object'
          ? food.address.fullAddress
          : food.address}
      </p>
    </div>
  );
};

