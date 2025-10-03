import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../../Features/postSlice';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

export default function Post() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('Cooked');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  // Address fields
  const [homeaddress, setHomeAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

 const handleSuggestions = async (suggestion) => {
    setValue(suggestion.description, false);
    clearSuggestions();
    setHomeAddress(suggestion.description);

  try {
    const response = await getGeocode({ address: suggestion.description });

    if (!response[0]) {
      console.error('No geocode response found');
      return;
    }

    const addressComponents = response[0].address_components;

    const getAddressPart = (types) => {
      for (let type of types) {
        const match = addressComponents.find((comp) => comp.types.includes(type));
        if (match) return match.long_name;
      }
      return '';
    };

    // Set individual fields
    const extractedLandmark = getAddressPart([
        'point_of_interest',
        'premise',
        'sublocality_level_1',
        'neighborhood',
        'route',
      ]);
      const extractedCity = getAddressPart([
        'locality',
        'administrative_area_level_2',
        'administrative_area_level_1',
      ]);
      const extractedPincode = getAddressPart(['postal_code']);

      setLandmark(extractedLandmark || '');
      setCity(extractedCity || '');
      setPincode(extractedPincode || '');

    //console.log("Address components:", addressComponents);

  } catch (error) {
    console.error("Error getting address details:", error);
  }
};


  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullAddress = `${homeaddress}, ${landmark}, ${city} - ${pincode}`;
    dispatch(addFood({
      title,
      quantity,
      type,
      image,
      description,
      address: {
        homeaddress,
        landmark,
        city,
        pincode,
        fullAddress,
      },
    }));
    alert('Posted Your Food. Thanks for your contribution!');
    // Reset Form
    setTitle('');
    setQuantity('');
    setType('Cooked');
    setImage(null);
    setDescription('');
    setHomeAddress('');
    setLandmark('');
    setCity('');
    setPincode('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg border border-teal-200"
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Post Surplus Food</h2>
        {/* Food Title */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Food Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        {/* Quantity */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        {/* Type */}
        <div className="mb-4">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="Cooked">Cooked</option>
            <option value="Raw">Raw</option>
            <option value="Packaged">Packaged</option>
          </select>
        </div>
        {/* Description */}
        <div className="mb-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-24 resize-none"
          />
        </div>
        {/* Image Upload */}
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full p-3 border border-teal-300 rounded-lg"
          />
          {image && <img src={image} alt="preview" className="mt-2 w-32 h-32 object-cover rounded" />}
        </div>
        {/* Address Section */}
        <h3 className="text-lg font-semibold text-teal-700 mb-2">Pickup Address</h3>
        <div className="mb-4">
          <input
            value={value}
            placeholder="Enter Address"
            disabled={!ready}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          {status === 'OK' && (
            <ul className="mt-2 bg-white border border-teal-200 rounded-lg max-h-40 overflow-y-auto">
              {data.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => handleSuggestions(suggestion)}
                  className="p-2 hover:bg-teal-100 cursor-pointer"
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Landmark (e.g., Near City Mall)"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Post Food
        </button>
      </form>
    </div>
  );
}