import React, { useState } from 'react';
import { 
  MapPinIcon, 
  ClockIcon, 
  UserIcon, 
  HeartIcon, 
  ChatBubbleLeftIcon,
  HandRaisedIcon,
  EyeIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function FoodCard({ id, food }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Simulate posted time
  const getTimeAgo = () => {
    const options = ['2 hours ago', '5 hours ago', '1 day ago', '2 days ago', 'Just now'];
    return options[Math.floor(Math.random() * options.length)];
  };

  const handleRequest = () => {
    alert(`Request sent for "${food.title}". The donor will be notified!`);
  };

  const handleContact = () => {
    alert(`Opening contact form for "${food.title}" donor...`);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="max-w-sm bg-white rounded-xl border border-teal-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      
      {/* Image Section */}
      {food.image && (
        <div className="relative">
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-48 object-cover"
          />
          
          {/* Status Badge */}
          <span
            className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm
              ${food.status === "Fresh" ? "bg-green-500 text-white" :
                food.status === "Requested" ? "bg-yellow-500 text-white" :
                food.status === "Completed" ? "bg-blue-500 text-white" :
                "bg-gray-500 text-white"}`}
            data-testid={`food-card-status-${food.id}`}
          >
            {food.status}
          </span>

          {/* Like Button */}
          <button
            onClick={toggleLike}
            className="absolute top-3 left-3 p-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
            data-testid={`like-button-${food.id}`}
          >
            {isLiked ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600 hover:text-red-500" />
            )}
          </button>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-xl font-bold text-teal-800 line-clamp-2 flex-1" 
            data-testid={`food-card-title-${food.id}`}
          >
            {food.title}
          </h3>
          {!food.image && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ml-2 flex-shrink-0
                ${food.status === "Fresh" ? "bg-green-100 text-green-700" :
                  food.status === "Requested" ? "bg-yellow-100 text-yellow-800" :
                  food.status === "Completed" ? "bg-blue-100 text-blue-700" :
                  "bg-gray-200 text-gray-700"}`}
              data-testid={`food-card-status-no-img-${food.id}`}
            >
              {food.status}
            </span>
          )}
        </div>

        {/* Food Details */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <span className="font-semibold">Quantity:</span>
            <span className="text-teal-700 font-medium">{food.quantity}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <span className="font-semibold">Type:</span>
            <span className="text-teal-700 font-medium">{food.type}</span>
          </div>
        </div>

        {/* Description */}
        {food.description && (
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {showFullDescription ? food.description : truncateDescription(food.description)}
            </p>
            {food.description.length > 100 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-teal-600 text-xs font-medium hover:text-teal-700 mt-1"
                data-testid={`description-toggle-${food.id}`}
              >
                {showFullDescription ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        )}

        {/* Location */}
        <div className="flex items-start gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
          <MapPinIcon className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 line-clamp-2">
            {typeof food.address === 'object' ? food.address.fullAddress : food.address}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-3 w-3" />
            <span>{getTimeAgo()}</span>
          </div>
          <div className="flex items-center gap-1">
            <UserIcon className="h-3 w-3" />
            <span>Donor</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {food.status === 'Fresh' && (
            <button
              onClick={handleRequest}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              data-testid={`request-food-${food.id}`}
            >
              <HandRaisedIcon className="h-5 w-5" />
              Request Food
            </button>
          )}
          
          {food.status === 'Requested' && (
            <button
              disabled
              className="w-full bg-yellow-100 text-yellow-800 py-3 px-4 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
              data-testid={`requested-food-${food.id}`}
            >
              <ClockIcon className="h-5 w-5" />
              Already Requested
            </button>
          )}

          {food.status === 'Completed' && (
            <button
              disabled
              className="w-full bg-blue-100 text-blue-700 py-3 px-4 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
              data-testid={`completed-food-${food.id}`}
            >
              <CalendarDaysIcon className="h-5 w-5" />
              Donation Completed
            </button>
          )}

          {/* Secondary Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleContact}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
              data-testid={`contact-donor-${food.id}`}
            >
              <ChatBubbleLeftIcon className="h-4 w-4" />
              Contact
            </button>
            <button
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
              data-testid={`view-details-${food.id}`}
            >
              <EyeIcon className="h-4 w-4" />
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
