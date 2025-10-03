import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard'; 
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  MapPinIcon, 
  ClockIcon,
  Squares2X2Icon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

export default function Browse() {
  const foodList = useSelector((state) => state.postFood.foodList);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('Recent');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter options
  const foodTypes = ['All', 'Cooked', 'Raw', 'Packaged'];
  const statusOptions = ['All', 'Fresh', 'Requested', 'Completed'];
  const sortOptions = ['Recent', 'Alphabetical', 'Quantity'];

  // Filter + Sort logic (placeholder)
  const getFilteredAndSortedFood = () => {
    return foodList;
  };

  const filteredFood = getFilteredAndSortedFood();

  const FilterButton = ({ options, selected, onSelect, label }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
      </div>
      {foodList.length === 0 ? (
        <>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Food Items Yet</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Be the first to share surplus food in your community! Help reduce waste and feed those in need.
          </p>
          <Link 
            to="/post"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 inline-block"
            data-testid="browse-post-first-item"
          >
            Post Your First Item
          </Link>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedType('All');
              setSelectedStatus('All');
            }}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-800 mb-2" data-testid="browse-title">
            Browse Available Food
          </h1>
          <p className="text-teal-600 text-lg">Find surplus food in your community</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6 mb-8">
          {/* Search */}
          <div className="relative mb-4">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for food items, location, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              data-testid="search-input"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200" data-testid="filter-fresh">
                Fresh Food
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200" data-testid="filter-nearby">
                <MapPinIcon className="h-4 w-4 inline mr-1" />
                Nearby
              </button>
              <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200" data-testid="filter-cooked">
                Cooked Meals
              </button>
            </div>

            {/* View & Filter Controls */}
            <div className="flex items-center gap-2">
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200" data-testid="toggle-filters">
                <AdjustmentsHorizontalIcon className="h-4 w-4" /> Filters
              </button>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-teal-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`} data-testid="grid-view">
                  <Squares2X2Icon className="h-4 w-4" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-teal-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`} data-testid="list-view">
                  <ListBulletIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
              <FilterButton options={foodTypes} selected={selectedType} onSelect={setSelectedType} label="Food Type" />
              <FilterButton options={statusOptions} selected={selectedStatus} onSelect={setSelectedStatus} label="Status" />
              <FilterButton options={sortOptions} selected={sortBy} onSelect={setSortBy} label="Sort By" />
              <div className="flex items-end">
                <button onClick={() => { setSearchTerm(''); setSelectedType('All'); setSelectedStatus('All'); setSortBy('Recent'); }} className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200" data-testid="clear-all-filters">
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        {filteredFood.length > 0 && (
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">
              <span className="font-semibold text-teal-700">{filteredFood.length}</span> food items available
            </div>
            <div className="text-sm text-gray-500">
              Updated <ClockIcon className="h-4 w-4 inline mx-1" /> just now
            </div>
          </div>
        )}

        {/* Food Items */}
        {filteredFood.length === 0 ? (
          <EmptyState />
        ) : (
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center" : "space-y-4"} data-testid="food-items-container">
            {filteredFood.map((food) => (
              <div key={food.id} className={viewMode === 'list' ? 'w-full max-w-4xl mx-auto' : ''}>
                <FoodCard food={food} />
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredFood.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg" data-testid="load-more-button">
              Load More Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
