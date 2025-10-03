import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  PlusCircleIcon, 
  ChartBarIcon, 
  GiftIcon, 
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const foodList = useSelector((state) => state.postFood.foodList) || []
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    totalPosts: foodList.length,
    freshItems: foodList.filter(food => food.status === 'Fresh').length,
    requestedItems: foodList.filter(food => food.status === 'Requested').length,
    completedDonations: foodList.filter(food => food.status === 'Completed').length,
  }

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-semibold rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-teal-600 text-white shadow-md'
          : 'bg-white text-teal-600 border border-teal-300 hover:bg-teal-50'
      }`}
      data-testid={`dashboard-tab-${id}`}
    >
      {label}
    </button>
  )

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
        <Icon className={`h-10 w-10 ${color}`} />
      </div>
    </div>
  )

  const FoodItemCard = ({ food }) => (
    <div className="bg-white rounded-lg border border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-teal-800" data-testid={`food-item-${food.id}`}>
            {food.title}
          </h3>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              food.status === "Fresh" ? "bg-green-100 text-green-700" :
              food.status === "Requested" ? "bg-yellow-100 text-yellow-800" :
              food.status === "Completed" ? "bg-blue-100 text-blue-700" :
              "bg-gray-200 text-gray-700"
            }`}
            data-testid={`food-status-${food.id}`}
          >
            {food.status}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Quantity:</span> {food.quantity}
          </div>
          <div>
            <span className="font-medium">Type:</span> {food.type}
          </div>
        </div>

        {food.description && (
          <p className="text-gray-700 mb-4 text-sm line-clamp-2">{food.description}</p>
        )}

        <div className="flex items-start mb-4">
          <MapPinIcon className="h-4 w-4 text-teal-500 mt-1 mr-2 flex-shrink-0" />
          <p className="text-sm text-gray-600 line-clamp-2">
            {typeof food.address === 'object' ? food.address.fullAddress : food.address}
          </p>
        </div>

        {food.image && (
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
        )}

        <div className="flex gap-2">
          <button 
            className="flex-1 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
            data-testid={`view-food-${food.id}`}
          >
            <EyeIcon className="h-4 w-4" />
            View Details
          </button>
          <button 
            className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
            data-testid={`edit-food-${food.id}`}
          >
            <PencilSquareIcon className="h-4 w-4" />
            Edit
          </button>
          <button 
            className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
            data-testid={`delete-food-${food.id}`}
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 py-8">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-800 mb-2" data-testid="dashboard-title">
            Your Dashboard
          </h1>
          <p className="text-teal-600 text-lg">Manage your food donations and track your impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={PlusCircleIcon} title="Total Posts" value={stats.totalPosts} color="text-teal-600" />
          <StatCard icon={ClockIcon} title="Fresh Items" value={stats.freshItems} color="text-green-600" />
          <StatCard icon={ChartBarIcon} title="Requested" value={stats.requestedItems} color="text-yellow-600" />
          <StatCard icon={GiftIcon} title="Completed" value={stats.completedDonations} color="text-blue-600" />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="my-posts" label="My Food Posts" isActive={activeTab === 'my-posts'} onClick={setActiveTab} />
          <TabButton id="analytics" label="Analytics" isActive={activeTab === 'analytics'} onClick={setActiveTab} />
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  to="/post"
                  className="p-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-colors duration-200 flex flex-col items-center gap-3"
                  data-testid="dashboard-post-food"
                >
                  <PlusCircleIcon className="h-10 w-10" />
                  <span className="font-semibold">Post New Food</span>
                </Link>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors duration-200 flex flex-col items-center gap-3"
                  data-testid="dashboard-view-analytics"
                >
                  <ChartBarIcon className="h-10 w-10" />
                  <span className="font-semibold">View Analytics</span>
                </button>
                <Link 
                  to="/browse"
                  className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors duration-200 flex flex-col items-center gap-3"
                  data-testid="dashboard-browse-food"
                >
                  <GiftIcon className="h-10 w-10" />
                  <span className="font-semibold">Browse Food</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Recent Activity</h2>
              {foodList.length > 0 ? (
                <div className="space-y-4">
                  {foodList.slice(0, 3).map((food) => (
                    <div key={food.id} className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                          <PlusCircleIcon className="h-6 w-6 text-teal-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Posted "{food.title}"</p>
                          <p className="text-sm text-gray-600">Status: {food.status}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Recently</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <PlusCircleIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No recent activity. Start by posting your first food item!</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'my-posts' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-teal-800">My Food Posts ({foodList.length})</h2>
              <Link 
                to="/post"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center gap-2"
                data-testid="add-new-post-button"
              >
                <PlusCircleIcon className="h-5 w-5" />
                Add New Post
              </Link>
            </div>
            
            {foodList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodList.map((food) => (
                  <FoodItemCard key={food.id} food={food} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md border border-teal-100 p-12 text-center">
                <PlusCircleIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Food Posts Yet</h3>
                <p className="text-gray-500 mb-6">Start making a difference by posting your surplus food!</p>
                <Link 
                  to="/post"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                  data-testid="post-first-food-item"
                >
                  <PlusCircleIcon className="h-5 w-5" />
                  Post Your First Food Item
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800">Analytics & Impact</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-6">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Food Items Shared</span>
                    <span className="font-bold text-2xl text-teal-600">{stats.totalPosts}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">People Helped</span>
                    <span className="font-bold text-2xl text-green-600">{stats.completedDonations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Waste Reduced</span>
                    <span className="font-bold text-2xl text-blue-600">{stats.totalPosts * 1.5}kg</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-6">Status Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Fresh</span>
                    </div>
                    <span className="font-semibold">{stats.freshItems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-600">Requested</span>
                    </div>
                    <span className="font-semibold">{stats.requestedItems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Completed</span>
                    </div>
                    <span className="font-semibold">{stats.completedDonations}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6">
              <h3 className="text-xl font-semibold text-teal-800 mb-6">Monthly Activity</h3>
              <div className="h-64 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ChartBarIcon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <p className="text-teal-600 font-medium">Activity Chart</p>
                  <p className="text-sm text-teal-500">Visual analytics coming soon</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
