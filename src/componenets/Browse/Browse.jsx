import React from 'react';
import { useSelector } from 'react-redux';
import FoodCard from './FoodCard'; 

export default function Browse(){
  const foodList = useSelector((state) => state.postFood.foodList);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">Browse Food</h2>

      {foodList.length === 0 ? (
        <p className="text-center text-gray-500">No food items have been posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {foodList.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};


