import React, { useState } from 'react';
import '../../assets/css/SideBarRight.css';
import 'react-calendar/dist/Calendar.css'; // Import CSS cho Calendar
import Calendar from 'react-calendar';
import WeatherWidget from '../ui/WeatherWidget';
import RecommendedEvents from '../ui/RecommendedEvents'; // Import RecommendedEvents

function SideBarRight() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const events = [
    { id: 1, title: 'Concert in the Park', dateStart: '30/08/2024', dateEnd: '30/09/2024',  description: 'Enjoy live music in the beautiful park.', image: 'https://via.placeholder.com/150', location: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000' },
    { id: 2, title: 'Art Exhibition', dateStart: '30/08/2024', dateEnd: '30/09/2024', description: 'Discover stunning artwork from local artists.', image: 'https://via.placeholder.com/150', location: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000' },
    { id: 3, title: 'Food Festival', dateStart: '30/08/2024',  dateEnd: '30/09/2024', description: 'Taste a variety of cuisines from different cultures.', image: 'https://via.placeholder.com/150', location: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000' },
  ];

  return (
    <div className='bg-white p-3'>
      <div className='sidebar-calendar mb-4'>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <WeatherWidget />
      <RecommendedEvents events={events} /> {/* Truyền dữ liệu cho RecommendedEvents */}
    </div>
  );
}

export default SideBarRight;
