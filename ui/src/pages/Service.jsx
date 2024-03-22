import React, { useState, useEffect } from 'react';
import christmas from './../assets/christmas.png'
import workshop from './../assets/workshop.png'
import paint from './../assets/paint.png'
import ferry from './../assets/ferry.png'
import picnic from './../assets/picnic.png'
import movie from './../assets/movie.png'
import Navigation from '../components/Navigation'

const Service = () => {
  const [services, setServices] = useState([]);
  // Event data based on the provided screenshot, replace with actual data
  const [events, setEvents] = useState([
    {
      id: 'event1',
      title: 'Christmas Celebration with our Grandpals!',
      description: 'Nothing will ever give you the heart to face another year, than a Christmas tree in the home and the people you love around it. These silver-haired lovelies deserved both.',
      imageUrl: christmas, // Replace with your actual image path
      
    },
    {
      id: 'event2',
      title: 'Mind & Movement Workshop at GatherCloud',
      description: 'Very often seniors sink away into their homes with no mental or physical stimulation. Goodfellows refuses to accept this and we put together happy activities and games based on that to help keep their mind sharp and fight aging.',
      imageUrl: workshop, // Replace with your actual image path
      
    },
    {
      id: 'event3',
      title: 'Our Grandpals painted a Wall!',
      description: 'We saw our Silver haired cuties time travel to their childhood painting their heart out on Sassoon Docks Walls in Bloomington.',
      imageUrl: paint, // Replace with your actual image path
      
    },
    {
      id: 'event4',
      title: 'Ferry Ride with Granpals!',
      description: 'We have left a bottle in the sea with a paper rolled with stories and smiles. This was not just a ferry ride but an emotion that all of us will carry through out our lives.',
      imageUrl: ferry, // Replace with your actual image path
      
    },
    {
      id: 'event5',
      title: 'Picnic at the park',
      description: 'A bright, sunny day calls for a picnic with our favorites where we danced, sang and laughed our hearts out!',
      imageUrl: picnic, // Replace with your actual image path
      
    },
    {
      id: 'event6',
      title: 'Grandpals Movie Night',
      description: 'Inox helped us curate a special movie night of endless wonder and popcorn, recliner seats and a 3D screening of a Hollywood favorite for our GrandPals!',
      imageUrl: movie, // Replace with your actual image path
      
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    title: '',
    type: '',
    company: '',
    minPrice: '',
    maxPrice: '',
  });
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/services/delivery-services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/services/search?key=${searchTerm}`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error searching services:', error);
    }
  };

  const handleFilter = async () => {
    const queryParams = new URLSearchParams(filter).toString();
    try {
      const response = await fetch(`http://localhost:3000/api/services/filter?${queryParams}`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error filtering services:', error);
    }
  };

  const updateFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (

//     <div className="p-4">
//     <Navigation/>
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search services..."
//           className="border border-gray-300 rounded p-2 mr-2 flex-grow"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white rounded p-2"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
      // <div className="bg-black p-4 rounded mb-4">
      //   <div className="flex items-center mb-2">
      //     <input
      //       type="text"
      //       placeholder="Title"
      //       className="border border-gray-300 rounded p-2 mr-2"
      //       value={filter.title}
      //       onChange={(e) => updateFilter('title', e.target.value)}
      //     />
      //     <input
      //       type="text"
      //       placeholder="date"
      //       className="border border-gray-300 rounded p-2 mr-2"
      //       value={filter.type}
      //       onChange={(e) => updateFilter('type', e.target.value)}
      //     />
      //     <input
      //       type="text"
      //       placeholder="Company"
      //       className="border border-gray-300 rounded p-2 mr-2"
      //       value={filter.company}
      //       onChange={(e) => updateFilter('company', e.target.value)}
      //     />
      //     <input
      //       type="number"
      //       placeholder="location"
      //       className="border border-gray-300 rounded p-2 mr-2"
      //       value={filter.minPrice}
      //       onChange={(e) => updateFilter('minPrice', e.target.value)}
      //     />
      //     <input
      //       type="number"
      //       placeholder="category"
      //       className="border border-gray-300 rounded p-2 mr-2"
      //       value={filter.maxPrice}
      //       onChange={(e) => updateFilter('maxPrice', e.target.value)}
      //     />
      //     <button
      //       className="bg-green-500 text-white rounded p-2"
      //       onClick={handleFilter}
      //     >
      //       Filter
      //     </button>
      //   </div>
//       </div>
//       <div className="flex flex-col items-center justify-center">
//         {events.map((event) => (
//           <div key={event.id} className="mb-8 text-center">
//           <h2 className="text-2xl font-bold my-2">{event.title}</h2>
//           <p className="text-lg mb-4">{event.description}</p>
//           <img src={event.imageUrl} alt={event.title} className="w-full max-w-md mx-auto" />
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };
<div className="p-4">
<Navigation />
<div className='p-10'/>
<div className="flex items-center mb-4">
  <input
    type="text"
    placeholder="Search services..."
    className="border border-gray-300 rounded p-2 mr-2 flex-grow"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button className="bg-blue-500 text-white rounded p-2" onClick={handleSearch}>
    Search
  </button>
</div>
<div className="bg-black p-4 rounded mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded p-2 mr-2"
            value={filter.title}
            onChange={(e) => updateFilter('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="date"
            className="border border-gray-300 rounded p-2 mr-2"
            value={filter.type}
            onChange={(e) => updateFilter('type', e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            className="border border-gray-300 rounded p-2 mr-2"
            value={filter.company}
            onChange={(e) => updateFilter('company', e.target.value)}
          />
          <input
            type="number"
            placeholder="location"
            className="border border-gray-300 rounded p-2 mr-2"
            value={filter.minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
          />
          <input
            type="number"
            placeholder="category"
            className="border border-gray-300 rounded p-2 mr-2"
            value={filter.maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
          />
          <button
            className="bg-green-500 text-white rounded p-2"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
        </div>
<div className="flex flex-wrap justify-center">
  {events.map((event) => (
    <div key={event.id} className="flex mb-8 w-full max-w-4xl border rounded overflow-hidden shadow-lg">
      <img src={event.imageUrl} alt={event.title} className="w-1/2" />
      <div className="p-4 flex flex-col justify-between w-1/2">
        <div>
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          <p className="text-lg mb-4">{event.description}</p>
        </div>
        <div className="p-2">
          <button className="bg-blue-500 text-white rounded p-2 mr-2">
            View Details
          </button>
          <button className="bg-green-500 text-white rounded p-2">
            Register
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
);
};


export default Service;
