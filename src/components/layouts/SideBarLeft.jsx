import React, { useState } from 'react';
import Shortcut from '../ui/Shortcut';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import CSS cho Calendar
import '../../assets/css/SideBarLeft.css'; // Import file CSS của bạn

function SideBarLeft() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='bg-white'>
      <div>
        <h4 className='fw-bold mb-2'>Shortcuts</h4>
        <Shortcut icon="house" title="Home" />
        <Shortcut icon="people" title="Friends" />
        <Shortcut icon="bell" title="Notifications" />
        <Shortcut icon="envelope" title="Messages" />
        <Shortcut icon="calendar" title="Events" />
        <Shortcut icon="gear" title="Settings" />
      </div>
      
     
    </div>
  );
}

export default SideBarLeft;
