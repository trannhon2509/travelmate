import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Card và Button từ react-bootstrap

function RecommendedEvents({ events }) {
  if (!events || events.length === 0) {
    return <p>No events to display.</p>;
  }

  return (
    <div className='recommended-events'>
      <h4 className='fw-bold mb-3'>Recommended Events</h4>
      {events.map(event => (
        <Card key={event.id} className='mb-3 event-card'>
          <Card.Body className='p-2'>
            <div className='d-flex align-items-center'>
              <img src={event.image} alt={event.title} className='event-image' width={80} height={80} />
              <div className='ms-3'>
                <Card.Title className='mb-1'>{event.title}</Card.Title>
                <Card.Subtitle className="mb-1 text-muted fw-semibold">{event.dateStart} - {event.dateEnd}</Card.Subtitle>
                <Card.Subtitle className="mb-1 text-muted fw-semibold">{event.location}</Card.Subtitle>
                
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RecommendedEvents;
